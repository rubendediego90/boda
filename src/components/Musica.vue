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
  <MusicSearcher v-if="tab==='add'" :listMusic="listMusic" @setListMusic="setListMusic($event)"/>
  <MusicList v-if="tab==='list'"/>

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
