<script setup>
  import Title from "./Title.vue"
  import Mapbox from "./Mapbox.vue"

</script>

<template>
  <Title title="Lugar"/>
    <div class="col-12 column" style="padding:1rem">
      <p class="text-justify">Os esperamos en <strong><u>La Vega del Henares</u></strong> donde celebraremos nuestro matrimonio junto a nuestros seres queridos.</p>
    </div>
      <Mapbox/>
      <div style="display: flex;justify-content: center;align-items: center;margin-top: 1rem;">
        <a href="http://maps.google.com/?q=Carretera Madrid Barcelona, 0 Km 33, N-II, 28801 Alcalá de Henares, Madrid">
          <q-btn color="black" icon="map" label="Ir a Google Maps" rounded/>
        </a>
      </div>
    
</template>


