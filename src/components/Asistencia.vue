<script setup>
import { reactive,ref } from "vue";
import Title from "./Title.vue"
import { useQuasar } from 'quasar'
import {postGuest} from '../../src/api/guest.api'
const $q = useQuasar()

  const stateDefault = reactive({
    nombre:null,
    acompaniantesNombre:null,
    numAdultos:null,
    numNinios:null,
    alergias:null,
    bus:false,
    observaciones:null
  })

  const scroll = ()=>{
    setTimeout(() => {
      let isError = document.getElementsByClassName("text-negative");
      if (isError.length > 0) 
          document.getElementsByClassName("text-negative")[0].scrollIntoView({behavior:'smooth',block:'center' })
    }, "0")
  }

  const state = reactive({...stateDefault})

  const numbersOptionsChild = [0,1,2,3,4,5,6,7,8,9]

  const numbersOptionsParent = [1,2,3,4,5,6,7,8,9]

  const loading = ref(false)

  const confirmDialog = ref(false)
  const okDialog = ref(false)

  const handleConfirmDialog = (param) => confirmDialog.value = param

  const handleRequest = async () =>{
    loading.value=true
    try{
      const resp = await postGuest(state)
      if(resp.status === 200){
        okDialog.value=true
      }else{
        triggerNegative()
        console.log('error')
      }
    }
    catch(error){
      console.error(error)
      triggerNegative()
    }
    loading.value=false
    handleConfirmDialog(false)
  }

  const onSubmit = () =>{
    handleConfirmDialog(true)
  }

  const checkValue = (value) =>value === null ? ' - ' : value

  function triggerNegative () {
        $q.notify({
          type: 'negative',
          message: 'Ocurrió un error, por favor contacta con nosotros.'
        })
      }

</script>
<template>
    <Title title="Asistencia"/>
    <div class="row " style="justify-content: center;align-items: center">
      <q-form
        @submit="onSubmit"
        class="q-gutter-lg"
        style="width:95%;display: flex;flex-direction: column;"
      >
        <q-input color="blue-12" v-model="state.nombre" lazy-rules label-slot
        :rules="[ val => val && val.length > 0 || 'Campo obligatorio']">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
          <template v-slot:label>
            Nombre y apellidos
            <span class="text-weight-bold text-deep-orange">*</span>
          </template>
        </q-input>
        <q-input
          v-model="state.acompaniantesNombre"
          type="textarea"
          label="Nombre y apellidos acompañantes"
        >
          <template v-slot:prepend>
            <q-icon name="group" />
          </template>
       </q-input>
        <q-select color="blue-12" v-model="state.numAdultos" :options="numbersOptionsParent" lazy-rules label-slot
        :rules="[
          val => val !== null && val !== '' || 'Campo obligatorio'
        ]">
        <template v-slot:prepend>
          <q-icon name="restaurant_menu" />
        </template>
        <template v-slot:label>
          Menus adulto
            <span class="text-weight-bold text-deep-orange">*</span>
          </template>
      </q-select>
      <q-select color="blue-12" v-model="state.numNinios" :options="numbersOptionsChild" lazy-rules label-slot
        :rules="[
          val => val !== null && val !== '' || 'Campo obligatorio'
        ]">
        <template v-slot:prepend>
          <q-icon name="local_pizza" />
        </template>
        <template v-slot:label>
          Menus niño
            <span class="text-weight-bold text-deep-orange">*</span>
          </template>
      </q-select>
      <q-input
          v-model="state.alergias"
          label="Alergias e intolerancias"
        >
          <template v-slot:prepend>
            <q-icon name="bug_report" />
          </template>
       </q-input> 
       <div style="display:flex;justify-content: space-between">
        <div style="display:flex;align-items: center;">
          <q-icon style="color:grey; font-size: 140%;padding-right:1.2rem" name="directions_bus" />
          <p style="color:grey; font-size: 120%;padding: 0;margin: 0;">¿Irás en el autobus?</p>
        </div>
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
        <q-btn style="width: 60%;" type="submit" color="black" icon="mail_outline" label="Enviar" rounded @click="scroll()"/>
       </div>
       <br>
      </q-form>
      </div>
    <q-dialog v-model="confirmDialog" transition-show="rotate" transition-hide="rotate" transition-duration="500">
      <q-card>
        <q-card-section v-if="!loading" style="overflow-x: hidden;">
          <div>
            <span lang="de" class="hyphens negrita">Nombre y apellidos:</span>
            <p lang="de" class="hyphens">{{`${state.nombre}`}}</p>
            <span lang="de" class="hyphens negrita">Nombre y apellidos de acompañantes:</span>
            <p lang="de" class="hyphens">{{`${checkValue(state.acompaniantesNombre)}`}}</p>
            <span lang="de" class="hyphens negrita">Número de menus de adulto:</span>
            <p lang="de" class="hyphens">{{`${state.numAdultos}`}}</p>
            <span lang="de" class="hyphens negrita">Número de menus de niño:</span>
            <p lang="de" class="hyphens">{{`${state.numNinios}`}}</p>
            <span lang="de" class="hyphens negrita">Alergias e intolerancias:</span>
            <p lang="de" class="hyphens">{{`${checkValue(state.alergias)}`}}</p>
            <span lang="de" class="hyphens negrita">Irás en autobus:</span>
            <p lang="de" class="hyphens">{{`${state.bus ? 'Sí' : 'No'}`}}</p>
            <span lang="de" class="hyphens negrita">Otra información:</span>
            <p lang="de" class="hyphens">{{`${checkValue(state.observaciones)}`}}</p>
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
        <q-card-section v-else>
          <q-circular-progress
            indeterminate
            rounded
            size="10rem"
            color="blue"
            class="q-ma-md"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="okDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div style="font-weight:900">¡Todo ha ido correctamente!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <p>Muchas gracias por ayudarnos con el registro.</p>
          <q-img
          src="../assets/star-wars.jpg"
          style="width:100%;height:100%"
        />
        </q-card-section>
      </q-card>
    </q-dialog>

</template>
<style scoped>
.hyphens {
  overflow-wrap: break-word;
}

.negrita{
  font-weight: 600;
}
</style>


