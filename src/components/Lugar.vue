<script setup>
  import Title from "./Title.vue"
  import Mapbox from "./Mapbox.vue"

</script>

<template>
  <Title title="Lugar"/>
    <div class="col-12 column" style="padding:1rem">
      <span class="text-justify">Os esperamos en <strong><u>La Vega del Henares</u></strong> donde celebraremos nuestro matrimonio junto a nuestros seres queridos.</span>
    </div>
    <div style="display: flex;justify-content: center;align-items: center;">
        <a href="http://maps.google.com/?q=Carretera Madrid Barcelona, 0 Km 33, N-II, 28801 Alcalá de Henares, Madrid" style="text-decoration: none;">
          <q-btn color="black" icon="map" label="Ir a Google Maps" rounded/>
        </a>
      </div>
      <Mapbox style="margin-top: 1rem;"/>   
</template>


