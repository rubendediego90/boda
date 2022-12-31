<script setup>
import ButtonDesplegable from './components/ButtonDesplegable.vue'
import img from "./assets/manos.jpeg";
import Asistencia from "./components/Asistencia.vue"
import Inicio from "./components/Inicio.vue"
import Itinerario from "./components/Itinerario.vue"
import Lugar from "./components/Lugar.vue"
import Musica from "./components/Musica.vue"
import Regalos from "./components/Regalos.vue"
import Bus from "./components/Bus.vue"
import { onMounted, ref } from 'vue'
import {getGuest} from '../src/api/guest.api'

const tabSelected = ref('Inicio')

const handleTabSelected = (event) =>{
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  tabSelected.value = event
}

const text = ref('')

onMounted(async ()=>{
  text.value =await getGuest()
})

</script>

<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="bg-primary text-white">
      <ButtonDesplegable class="column" @handleTabSelected="handleTabSelected($event)" style="position: fixed;margin:0.2rem"/>
      <q-img
        class="col-12"
        :src="img"
        style="height: 100px"
        fit="fill"
      >
      </q-img>
    </q-header>
    <q-page-container>

      <div class="column" style="z-index:0">
        <Asistencia v-if="tabSelected==='Asistencia'"/>
        <Inicio v-if="tabSelected==='Inicio'"/>
        <Itinerario v-if="tabSelected==='Itinerario'"/>
        <Lugar v-if="tabSelected==='Lugar'"/>
        <Musica v-if="tabSelected==='Música'"/>
        <Regalos v-if="tabSelected==='Regalos'"/>
        <Bus v-if="tabSelected==='Autobus'"/>
      </div>
    </q-page-container>
    <q-footer elevated class="q-pa-md bg-grey-8 ">
      <q-toolbar class="row justify-end">
        <a href="https://api.whatsapp.com/send?phone=+34689529238" class="col-6" style="text-decoration: inherit;">
          <q-chat-message
            avatar="./assets/avatar-ruben.jpeg"
            :text="['¿Dudas?']"
            sent
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+34665091123" class="col-6" style="text-decoration: inherit;">
          <q-chat-message
          avatar="./assets/avatar-isa.jpeg"
            :text="['¡Clicka!']"
            sent
          />
        </a>  
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>