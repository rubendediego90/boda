<template>
  <Title title="Música"/>
    <div class="col-12 column" style="padding-top:1rem;padding-left: 1rem;padding-right: 1rem;">
      <p class="text-justify">¡Ayudanos con la música! Añade tus canciones favoritas para disfrutar de ellas en la fiesta después de la cómida. Además puedes ver la música añadida por el resto de invitados.</p>
    </div>
  <q-tabs
    v-model="tab"
    inline-label
    no-caps
    class="bg-warning text-white shadow-2"
  >
    <q-tab name="add" icon="playlist_add" label="Añadir Música"/>
    <q-tab name="list" icon="queue_music" label="Lista de Música" />

  </q-tabs>
  <MusicList v-if="tab==='list'"/>
  <MusicSearcher v-if="tab==='add'" :listMusic="listMusic" @setListMusic="setListMusic($event)"/>

</template>

<script setup>
import Title from "./Title.vue"
import { ref } from 'vue'
import MusicList from './MusicaLista.vue'
import MusicSearcher from './MusicaSearcher.vue'

const tab = ref('add')
const listMusic = ref([])

const setListMusic = (event) =>listMusic.value = event
</script>
<!--
  import { ref,onMounted } from "vue";
  import {postMusic,getMusic} from '../../src/api/music.api'
  const song = ref('')
  const okDialog = ref(false)
  const loading = ref(false)
  const loadingFirst = ref(false)

  const pagination = ref({
      page: 1,
      rowsPerPage: 5
  })

  const columns = [
    { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre' },
  ]

  const onSubmit = async () =>{
    loading.value=true

    try{
      const resp = await postMusic({nombre:song.value})
      if(resp.status === 200){
        okDialog.value=true
        itemsBbdd.value = [{nombre:song.value},...itemsBbdd.value]
        itemsFiltred.value = [{nombre:song.value},...itemsFiltred.value]
        pagination.value.rowsPerPage = itemsBbdd.value.length
      }else{
        triggerNegative()
        console.log('error')
      }
    }
    catch(error){
      console.error(error)
      triggerNegative()
    }finally{
      loading.value=false
    }
  }
  
  let delayTimer;

  const search = () => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
        itemsFiltred.value = itemsBbdd.value.filter(e => removeAccents(e.nombre).toLowerCase().includes(removeAccents(song.value).toLowerCase()))
    }, 500); // Will do the ajax stuff after 1000 ms, or 1 s
  }

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

  const itemsBbdd = ref([])
  const itemsFiltred = ref([])

  onMounted(async()=>{
    const resp = await getMusic()
    itemsBbdd.value=resp.data.musics
    itemsFiltred.value=resp.data.musics
    pagination.value.rowsPerPage = itemsBbdd.value.length
    loadingFirst.value=true
  })
</script>

<template>
  <Title title="Música"/>
    <div class="col-12 column" style="padding-top:1rem;padding-left: 1rem;padding-right: 1rem;">
      <p class="text-justify">¡Ayudanos con la música! Añade tus canciones favoritas para disfrutar de ellas en la fiesta después de la cómida. También puedes ver la música añadida por los demás invitados.</p>
    </div>
    <div style="display: flex;justify-content: center;align-items: center;width:100%">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        style="width:95%;display: flex;flex-direction: row;align-items: center;"
      >
        <q-input @keydown="search()" color="blue-12" v-model="song" lazy-rules label-slot style="width:80%"
        :rules="[ val => val && val.length > 0 || 'Campo obligatorio']">
          <template v-slot:prepend>
            <q-icon name="music_note" />
          </template>
          <template v-slot:label>
            Título y cantante
          </template>
        </q-input>

        <q-btn type="submit" color="black" icon="playlist_add" rounded style="height:100%" :disable="loading"/>
      </q-form>
    </div>
    <audio src="audio.mp3"></audio>
    <q-table
    v-if="loadingFirst"
      style="margin:1rem"
      :rows="itemsFiltred"
      :columns="columns"
      row-key="name"
      flat
      bordered
      hide-header
      v-model:pagination="pagination"
      hide-bottom
      />
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
<style lang="scss">
tbody tr:nth-child(odd) td{
    background-color: #FFF4B0;
    white-space: initial;
}
tbody tr:nth-child(even) td{
  background-color: white;
  white-space: initial;
}
</style><script setup>
  import Title from "./Title.vue"
  import { ref,onMounted } from "vue";
  import {postMusic,getMusic} from '../../src/api/music.api'
  const song = ref('')
  const okDialog = ref(false)
  const loading = ref(false)
  const loadingFirst = ref(false)

  const pagination = ref({
      page: 1,
      rowsPerPage: 5
  })

  const columns = [
    { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre' },
  ]

  const onSubmit = async () =>{
    loading.value=true

    try{
      const resp = await postMusic({nombre:song.value})
      if(resp.status === 200){
        okDialog.value=true
        itemsBbdd.value = [{nombre:song.value},...itemsBbdd.value]
        itemsFiltred.value = [{nombre:song.value},...itemsFiltred.value]
        pagination.value.rowsPerPage = itemsBbdd.value.length
      }else{
        triggerNegative()
        console.log('error')
      }
    }
    catch(error){
      console.error(error)
      triggerNegative()
    }finally{
      loading.value=false
    }
  }
  
  let delayTimer;

  const search = () => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
        itemsFiltred.value = itemsBbdd.value.filter(e => removeAccents(e.nombre).toLowerCase().includes(removeAccents(song.value).toLowerCase()))
    }, 500); // Will do the ajax stuff after 1000 ms, or 1 s
  }

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

  const itemsBbdd = ref([])
  const itemsFiltred = ref([])

  onMounted(async()=>{
    const resp = await getMusic()
    itemsBbdd.value=resp.data.musics
    itemsFiltred.value=resp.data.musics
    pagination.value.rowsPerPage = itemsBbdd.value.length
    loadingFirst.value=true
  })
</script>

<template>
  <Title title="Música"/>
    <div class="col-12 column" style="padding-top:1rem;padding-left: 1rem;padding-right: 1rem;">
      <p class="text-justify">¡Ayudanos con la música! Añade tus canciones favoritas para disfrutar de ellas en la fiesta después de la cómida. También puedes ver la música añadida por los demás invitados.</p>
    </div>
    <div style="display: flex;justify-content: center;align-items: center;width:100%">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        style="width:95%;display: flex;flex-direction: row;align-items: center;"
      >
        <q-input @keydown="search()" color="blue-12" v-model="song" lazy-rules label-slot style="width:80%"
        :rules="[ val => val && val.length > 0 || 'Campo obligatorio']">
          <template v-slot:prepend>
            <q-icon name="music_note" />
          </template>
          <template v-slot:label>
            Título y cantante
          </template>
        </q-input>

        <q-btn type="submit" color="black" icon="playlist_add" rounded style="height:100%" :disable="loading"/>
      </q-form>
    </div>
    <audio src="audio.mp3"></audio>
    <q-table
    v-if="loadingFirst"
      style="margin:1rem"
      :rows="itemsFiltred"
      :columns="columns"
      row-key="name"
      flat
      bordered
      hide-header
      v-model:pagination="pagination"
      hide-bottom
      />
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
<style lang="scss">
tbody tr:nth-child(odd) td{
    background-color: #FFF4B0;
    white-space: initial;
}
tbody tr:nth-child(even) td{
  background-color: white;
  white-space: initial;
}
</style>-->
