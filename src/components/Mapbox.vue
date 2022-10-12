<template>
    <div class="map-container" ref="mapContainer"></div>
</template>
<script setup>    
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { onMounted, ref } from 'vue'

const mapContainer = ref()
 
mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW5kZWRpZWdvOTAiLCJhIjoiY2t5anF6M2ltMHYxdDJ2cW9lNHZmc3JteiJ9.-WS08Ja1iIvjKvBNRX_X9w';
onMounted(()=>{
    try{
        const map = new mapboxgl.Map({
            container: mapContainer.value, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [ -3.3257027308061775, 40.49381049145687], // starting position [lng, lat],
            zoom: 13, // starting zoom
            projection: 'globe' // display the map as a 3D globe
        });
        const myLocationMarker = new mapboxgl.Marker().setLngLat([ -3.3257027308061775, 40.49381049145687]).addTo(map)
        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
        });  
    }
    catch(error){
        console.error(error)
    }
})

</script>
<style scoped>
    .map-container{
        width: 98%;
        height: 20rem;
    }
</style>