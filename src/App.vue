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
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
  setup () {
    const $q = useQuasar()
    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)
    return {
      name,
      age,
      accept,
      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>