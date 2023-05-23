<script setup>
  import Title from "./Title.vue"
</script>

<template>
  <Title title="Bus"/>
    <div class="col-12 column" style="padding:1rem">
      <ul>
        <li>
          <p class="text-justify title-p">Ida a la Vega del Henares</p>
          <p class="text-justify">Salida desde Madrid. Ministerio de Agricultura (Paseo Infanta Isabel Nº1 - Enfrente de Atocha) <u><strong>12:00</strong></u>.</p>
          <p class="text-justify">Salida desde Alcalá de Henares. Vía Complutense Nº32 (Enfrente de comisiones obreras) a las <u><strong>12:30</strong></u>.</p>
        </li>
        <li>
          <p class="text-justify title-p">Primer regreso desde la finca.</p>
      <p class="text-justify">Media hora después de que comience el baile (sobre las <u><strong>18:30</strong></u> aprox). Parada en Alcalá (En comisiones obreras) y Madrid (Atocha).</p>
        </li>
        <li>
          <p class="text-justify title-p">Segundo regreso desde la finca.</p>
          <p class="text-justify">Media hora después de que termine el baile (sobre las <u><strong>22:15</strong></u> aprox). Parada en Alcalá (En comisiones obreras) y Madrid (Atocha).</p>
        </li>
      </ul>
    </div>
    <img style="width:100%;padding-left:1rem;padding-right:1rem" src="../assets/bus.jpg"/>

</template>
<style scoped>
li {
  margin-bottom: 10px; /* Ajusta el valor según tus necesidades */
  margin-left: 0px;
}
p{
  margin-bottom: 0px; /* Ajusta el valor según tus necesidades */
}
ul{
  padding-left: 5px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.title-p{
  font-weight: bold;
  text-decoration: underline;
}
</style>