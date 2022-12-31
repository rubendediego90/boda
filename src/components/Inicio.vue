<script setup>
  import Title from "./Title.vue"
  import { ref } from 'vue'

  const slide =  ref(1)
  const autoplay =  ref(true)
</script>

<template>
  <Title title="Inicio"/>
    <div class="col-12 column" style="padding:1rem">
      <p class="text-justify">¡Bienvenid@s! Después de vivir juntos en Madrid, pasar un confinamiento extricto, comprar una casa en Alcalá de Henares, el nacimiento de Iván, retrasar una boda por su llegada e ir a cinco bodas de las cuales ninguna ha sido la nuestra... </p>
      <p class="text-justify">Nos alegra anunciar que el próximo día sábado <strong><u>27 de Mayo de 2023, a las 13:00</u></strong> celebraremos nuestro matrimonio junto a nuestros seres queridos.</p>
      <p class="text-justify">Esperamos vuestra confirmación.</p>
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
      <q-carousel-slide :name="1" img-src="../assets/restaurante.jpeg" />
      <q-carousel-slide :name="2" img-src="../assets/boda-ana.jpeg" />
      <q-carousel-slide :name="3" img-src="../assets/torre.jpeg" />
      <q-carousel-slide :name="4" img-src="../assets/mont-michel.jpeg" />
      <q-carousel-slide :name="5" img-src="../assets/castillo.jpeg" />
      <q-carousel-slide :name="6" img-src="../assets/cala.jpeg" />
      <q-carousel-slide :name="7" img-src="../assets/gorra-verde.jpeg" />
      <q-carousel-slide :name="8" img-src="../assets/monte.jpeg" />
      <q-carousel-slide :name="9" img-src="../assets/thor.jpeg" />
      <q-carousel-slide :name="10" img-src="../assets/boda-ali.jpeg" />
      <q-carousel-slide :name="11" img-src="../assets/terrorista.jpeg" />
>
    </q-carousel>
</template>