<script setup>
import { ref,onMounted } from "vue";
import axios from 'axios'
import Row from './Row.vue'
import { useQuasar } from 'quasar'
import {postMusic} from '../../src/api/music.api'
const $q = useQuasar()

const props = defineProps({
    listMusic: {
        type: Array,
        required:true,
    }
})

const emit = defineEmits(['setListMusic'])

const song = ref('')
const loading = ref(false)
const RAPID_KEY = '1c1c6def9fmsh3e4dbfb60fb4870p12f89ejsn5aa2f5453658'
const indexActive = ref(null)
const listMusic = ref([])
const okDialog = ref(false)

const searcherYoutube = async () =>{
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-music1.p.rapidapi.com/v2/search',
            params: {query: song.value},
            headers: {
                'X-RapidAPI-Key': RAPID_KEY,
                'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
            }
        };
        const resp = await axios.request(options)
        if(resp.data.result.songs === undefined) return false
        listMusic.value = resp.data.result.songs.map(item=>(
            {
                id: item.id,
                name: item.name,
            } 
        ));   
        return true     
    } catch (error) {
        console.error(error) 
        return false
    }
}

const searcherSpotify = async ()=>{
    try {
        const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            q:song.value,
            type: 'multi',
            offset: '0',
            limit: '20',
            numberOfTopResults: '5'
        },
        headers: {
            'X-RapidAPI-Key': RAPID_KEY,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    const resp = await axios.request(options)
    listMusic.value = resp.data.tracks.items.map(item=>{
        const {id,name,artists} = item.data
        const cantante = artists.items[0].profile.name
        const obj =  {
            id: id,
            name: `${name} - ${cantante}`,
        } 
    return obj
    });   
    return true     
    } catch (error) {
        console.error(error) 
        return false
    }
}

const checkHaveList = (isFinish)=>{
    if(isFinish){
        emit('setListMusic',listMusic.value)
    }
    else{
        triggerNegative('al buscar la música')
    }
}

const searchList = async ()=>{
    loading.value = true
    let isFinish = false
    if(!isFinish) isFinish = await searcherSpotify()
    if(!isFinish) isFinish = await searcherYoutube()
    checkHaveList(isFinish)
    loading.value = false
}

const addSong = async (event) =>{
    loading.value=true

    try{
    const resp = await postMusic(event)
    if(resp.status === 200){
        okDialog.value=true
    }else{
        triggerNegative('al añadir la música')
    }
    }
    catch(error){
      console.error(error)
      triggerNegative('al añadir la música')
    }finally{
      loading.value=false
    }
}
function triggerNegative (tipeError) {
        $q.notify({
          type: 'negative',
          message: `Ocurrió un error ${tipeError}, por favor contacta con nosotros.`
        })
      }

onMounted(()=>{
    if(props.listMusic.length > 0)
        listMusic.value = props.listMusic
})

</script>
<template>

 <div style="display: flex;justify-content: center;align-items: center;width:100%">
    <q-form
    @submit="searchList()"
    class="q-gutter-md"
    style="width:95%;display: flex;flex-direction: row;align-items: center;"
    >
    <q-input color="blue-12" v-model="song" lazy-rules label-slot style="width:80%;padding-top:0.5rem ;"
    :rules="[ val => val && val.length > 0 || 'Campo obligatorio']">
    <template v-slot:prepend>
        <q-icon name="music_note" />
    </template>
    <template v-slot:label>
        Busca y añade música
    </template>
    </q-input>

    <q-btn type="submit" color="black" icon="search" rounded style="height:100%" :disable="loading"/>
    </q-form>
</div>
<div v-if="!loading">
    <Row v-for="(item, index) in listMusic" :row="item" :index="index" :indexActive="indexActive" style="margin-left:0.5rem;margin-right: 0.5rem;" @addSong="addSong($event)" @stopSong="stopSong()" @playSong="playSong($event)"/>
</div>
<div v-else style="display:flex;flex-direction: column;align-items: center;width: 100%;">
    <q-circular-progress
        indeterminate
        rounded
        size="10rem"
        color="warning"
    />
</div>
<q-dialog v-model="okDialog">
    <q-card>
        <q-card-section class="row items-center q-pb-none">
            <div style="font-weight:900">¡Todo ha ido correctamente!</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
            <p>Muchas gracias por ayudarnos con la música.</p>
            <q-img
                src="../assets/spiderman.jpeg"
                style="width:100%;height:100%"
            />
        </q-card-section>
    </q-card>
</q-dialog>
</template>
