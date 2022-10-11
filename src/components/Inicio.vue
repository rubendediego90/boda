<script setup>
  import Title from "./Title.vue"
  import { ref } from 'vue'

  const slide =  ref(1)
  const autoplay =  ref(true)
</script>

<template>
  <Title title="Inicio"/>
  <div class="column">
    <div class="col-12" style="padding:1rem">
      <p class="text-justify">¡Bienvenid@s! Después de vivir juntos en Madrid, un confinamiento extricto, comprar una casa en Alcalá de Henares, el nacimiento de Iván y retrasar una boda por su llegada e ir a cinco bodas que no era la nuestra... </p>
      <p class="text-justify">Nos complace anunciar que el próximo día sábado <strong><u>27 de Mayo de 2023</u></strong> celebraremos nuestro matrimonio junto a nuestros seres queridos.</p>
    </div>
  </div>

    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      :autoplay="autoplay"
      infinite
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
</template>