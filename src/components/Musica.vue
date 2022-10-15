<script setup>
  import Title from "./Title.vue"
  import { ref } from "vue";

  const song = ref('')

  const onSubmit = () =>{
   console.log('add music')
  }

</script>

<template>
  <Title title="Música"/>
    <div class="col-12 column" style="padding:1rem">
      <p class="text-justify">¡Ayudanos con la música! Añade tus canciones favoritas para disfrutar de ellas en la fiesta después de la cómida. También puedes ver la música añadida por los demás invitados.</p>
    </div>
    <div style="display: flex;justify-content: center;align-items: center;width:100%">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        style="width:95%;display: flex;flex-direction: column;"
      >
        <q-input color="blue-12" v-model="song" lazy-rules label-slot
        :rules="[ val => val && val.length > 0 || 'Campo obligatorio']">
          <template v-slot:prepend>
            <q-icon name="music_note" />
          </template>
          <template v-slot:label>
            Canción
          </template>
        </q-input>

       <div style="display:flex;justify-content:center">
        <q-btn style="width: 60%;" type="submit" color="black" icon="playlist_add" label="Añadir" rounded />
       </div>
       <br>
      </q-form>
    </div>
</template>