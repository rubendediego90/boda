<script setup>
  import { reactive,ref } from "vue";
import Title from "./Title.vue"

  const state = reactive({
    nombre:null,
    acompaniantesNombre:null,
    numAdultos:null,
    numNinios:null,
    alergias:null,
    bus:false,
    observaciones:''
  })
  const numbersOptions = [
  {
      label:0,
      value:0
    },    {
      label:1,
      value:1
    },

    {
      label:2,
      value:2
    },
    {
      label:3,
      value:3
    },
    {
      label:4,
      value:4
    },
    {
      label:5,
      value:5
    },
    {
      label:6,
      value:6
    },
    {
      label:7,
      value:7
    },
    {
      label:8,
      value:8
    },
    {
      label:9,
      value:9
    },
    {
      label:10,
      value:10
    },
  ]

  const confirmDialog = ref(false)

  const handleConfirmDialog = (param) => confirmDialog.value = param

  const handleRequest = () =>{
    console.log("Post")
    handleConfirmDialog(false)
  }
</script>


<template>
    <Title title="Asistencia"/>
    <div class="row " style="justify-content: center;align-items: center">
      <div style="width:90%;display: flex;flex-direction: column;gap: 1rem;">
        <q-input  color="blue-12" v-model="state.nombre" label="Nombre y apellidos">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input
          v-model="state.acompaniantesNombre"
          type="textarea"
          label="Nombre y apellidos de tus acompañantes"
        >
          <template v-slot:prepend>
            <q-icon name="group" />
          </template>
       </q-input>
       <div style="display:flex;flex-direction: row;justify-content: space-between;">
        <q-select style="width:48%" color="blue-12" v-model="state.numAdultos" :options="numbersOptions" label="Menus adulto">
        <template v-slot:prepend>
          <q-icon name="restaurant_menu" />
        </template>
      </q-select>
      <q-select style="width:48%" color="blue-12" v-model="state.numNinios" :options="numbersOptions" label="Menus niño">
        <template v-slot:prepend>
          <q-icon name="local_pizza" />
        </template>
      </q-select>
       </div>  

      <q-input
          v-model="state.alergias"
          label="Alergias e intolerancias"
        >
          <template v-slot:prepend>
            <q-icon name="bug_report" />
          </template>
       </q-input> 
       <div style="display:flex;justify-content: space-between;align-items: center">
        <q-icon style="color:grey; font-size: 140%" name="directions_bus" />
        <p style="color:grey; font-size: 120%;padding: 0;margin: 0;">¿Irás en el autobus contratado?</p>
        <q-toggle
            v-model="state.bus"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"         
          />
       </div>
        <q-input
          v-model="state.observaciones"
          type="textarea"
          label="¿Quieres añadir algo más?"
        >
          <template v-slot:prepend>
            <q-icon name="contact_support" />
          </template>
       </q-input>

       <div style="display:flex;justify-content:center">

         <q-btn style="width: 50%;" color="black" icon="mail_outline" label="Enviar" rounded @click="handleConfirmDialog(true)"/>
       </div>
       <br>
      </div>
    </div>
    <q-dialog v-model="confirmDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div style="font-weight:900">¡Por favor, revisa la información!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>
            <p>{{`Nombre y apellidos:${state.nombre}`}}</p>
            <p>{{`Nombre y apellidos de tus acompañantes:${state.acompaniantesNombre}`}}</p>
            <p>{{`Número de menus de adulto:${state.numAdultos.value}`}}</p>
            <p>{{`Número de menus de niño:${state.numNinios.value}`}}</p>
            <p>{{`Alergias e intolerancias:${state.alergias}`}}</p>
            <p>{{`Irás en autobus:${state.bus ? 'Sí' : 'No'}`}}</p>
            <p>{{`Otra información:${state.observaciones}`}}</p>
          </div>
          <div style="font-weight:900;display: flex;justify-content: center;">
            <p>
              ¿Deseas enviar la información?
            </p>
         </div>
          <q-space />
          <div style="display:flex;justify-content:space-around;">
            <q-btn style="width: 40%;" color="black" icon="cancel" label="No" rounded @click="handleConfirmDialog(false)"/>
            <q-btn style="width: 40%;" color="black" icon="mail_outline" label="Sí" rounded @click="handleRequest()"/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>


