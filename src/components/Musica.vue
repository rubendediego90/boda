<script setup>
  import Title from "./Title.vue"
  import { ref,onMounted } from "vue";
  import {postMusic,getMusic} from '../../src/api/music.api'

  const song = ref('')

  const onSubmit = () =>{
   console.log('add music')
  }

  let delayTimer;

  const search = () => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
        itemsFiltred.value = itemsBbdd.value.filter(e => removeAccents(e.nombre).toLowerCase().includes(removeAccents(song.value).toLowerCase()))
        console.log(itemsFiltred.value)
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
  })
  const columns = [
  { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre', sortable: true },
]
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

        <q-btn type="submit" color="black" icon="playlist_add" rounded style="height:100%"/>
      </q-form>
    </div>
    <q-table
      style="margin:1rem"
      :rows="itemsFiltred"
      :columns="columns"
      row-key="name"
      flat
      bordered
      hide-header
      hide-bottom
    />
</template>
<style lang="scss">
tbody tr:nth-child(odd) td{
    background-color: #FFF4B0;
}
tbody tr:nth-child(even) td{
  background-color: white;
}
</style>