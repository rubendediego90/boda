
<script setup>
  import Title from "./Title.vue"
</script>

<template>
  <Title title="Itinerario"/>
    <div class="col-12 column" style="padding:1rem">
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry
        title="Ceremonia"
        subtitle="13:30H"
        icon="church"
        body="Un ofreciante dedicará unas palabras. Además hablaran amigos y familiares de los novios."
        color="pink"
      />
      <q-timeline-entry
        title="Coctel"
        subtitle="14:30H"
        icon="tapas"
        body="Se servirá un magnífico coctel de bienvenida, en el cual habrá comida y bebida."
      />
      <q-timeline-entry
        title="Comida"
        subtitle="16:00"
        icon="restaurant"
        color="green"
        body="Momento de disfrutar del menú, cuanta con dos platos y postre."
      />
      <q-timeline-entry
        title="Fiesta"
        subtitle="18:00"
        icon="nightlife"
        body="Será hora de bailar y brindar para celebrar el matrimonio."
        color="red"
      />
      <q-timeline-entry
        title="Recena"
        subtitle="21:00"
        color="orange"
        icon="lunch_dining"
        body="Una hora antes de finalizar la fiesta habrá una pequeña sorpresa para cenar."
      />
    </q-timeline>
  </div>
  </div>
</template>