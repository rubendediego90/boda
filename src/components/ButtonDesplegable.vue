<template>
      <q-fab
        vertical-actions-align="left"
        label-position="bottom"
        glossy
        color="black"
        padding="5px"
        icon="menu"
        direction="down"
        
        text-color="white"
        :label-style="{ color:'white',width:'75px' }"
      >
        <q-fab-action @click="$emit('handleTabSelected','Inicio')"  color="warning" icon="favorite" label="Inicio" :label-style="{ color:'white',width:'60px',fontSize: '80%',padding:0 }" padding="5px"/>
        <q-fab-action @click="$emit('handleTabSelected','Lugar')"  color="secondary"  icon="room" label="Lugar" :label-style="{ color:'white',width:'60px',fontSize: '80%',padding:0 }" padding="5px"/>
        <q-fab-action @click="$emit('handleTabSelected','Asistencia')"  color="warning"  icon="group_add" label="Asistencia" :label-style="{ color:'white',width:'60px',fontSize: '80%',padding:0 }" padding="5px"/>
        <q-fab-action @click="$emit('handleTabSelected','Itinerario')" color="secondary"  icon="alarm" label="Itinerario" :label-style="{ color:'white',width:'60px',fontSize: '80%',padding:0 }" padding="5px"/>
        <q-fab-action @click="$emit('handleTabSelected','Regalos')" color="warning"  icon="card_giftcard" label="Regalos" :label-style="{ color:'white',width:'60px',fontSize: '80%',padding:0 }" padding="5px"/>
        <q-fab-action @click="$emit('handleTabSelected','Música')" color="secondary"  icon="music_note" label="Música" :label-style="{ color:'white',width:'60px',fontSize: '80%',padding:0 }" padding="5px"/>
        <q-fab-action @click="$emit('handleTabSelected','Autobus')" color="warning"  icon="airport_shuttle" label="Autobus" :label-style="{ color:'white',width:'60px',fontSize: '80%',padding:0 }" padding="5px"/>
      </q-fab>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['handleTabSelected'])

const a = "hola"
</script>
<style scoped>

</style>

