<!--<script setup>
import ButtonDesplegable from './components/ButtonDesplegable.vue'
import img from "./assets/manos.jpg";
import Asistencia from "./components/Asistencia.vue"
import Inicio from "./components/Inicio.vue"
import Itinerario from "./components/Itinerario.vue"
import Lugar from "./components/Lugar.vue"
import Musica from "./components/Musica.vue"
import Regalos from "./components/Regalos.vue"
import { onMounted, ref } from 'vue'
import {getGuest} from '../src/api/guest.api'

const tabSelected = ref('Inicio')

const handleTabSelected = (event) =>{
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
      <q-img
        class="col-12"
        :src="img"
        style="height: 100px"
        fit="fill"
      >
      </q-img>
    </q-header>
    <q-page-container>
      <q-page-sticky style="z-index:1" position="top-left" :offset="[10, 10]">
        <ButtonDesplegable class="column" @handleTabSelected="handleTabSelected($event)"/>
      </q-page-sticky>
      <div class="column" style="z-index:0">
        <Asistencia v-if="tabSelected==='Asistencia'"/>
        <Inicio v-if="tabSelected==='Inicio'"/>
        <Itinerario v-if="tabSelected==='Itinerario'"/>
        <Lugar v-if="tabSelected==='Lugar'"/>
        <Musica v-if="tabSelected==='Música'"/>
        <Regalos v-if="tabSelected==='Regalos'"/>
      </div>
    </q-page-container>
    <q-footer elevated class="q-pa-md bg-grey-8 ">
      <q-toolbar class="row justify-end">
        <a href="https://api.whatsapp.com/send?phone=+34689529238" class="col-6" style="text-decoration: inherit;">
          <q-chat-message
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['¿Dudas?']"
            sent
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+34665091123" class="col-6" style="text-decoration: inherit;">
          <q-chat-message
            avatar="https://cdn.quasar.dev/img/avatar2.jpg"
            :text="['¡Clicka!']"
            sent
          />
        </a>  
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>-->
<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input color="purple-12" v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="teal" filled v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="grey-3" label-color="orange" outlined v-model="text" label="Label">
        <template v-slot:append>
          <q-icon name="event" color="orange" />
        </template>
      </q-input>

      <q-input color="lime-11" bg-color="green" filled v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="teal" outlined v-model="text" label="Label">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input color="orange" standout bottom-slots v-model="text" label="Label" counter clearable>
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
</script>
