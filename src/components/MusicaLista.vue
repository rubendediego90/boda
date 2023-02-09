<script setup>

import { ref,onMounted } from "vue";
import {getMusic} from '../../src/api/music.api'

const song = ref('')

const loading = ref(false)
const loadingFirst = ref(false)

const pagination = ref({
    page: 1,
    rowsPerPage: 5
})
  
const columns = [
    { name: 'name', align: 'center', label: 'Nombre', field: 'name' },
]
  
let delayTimer;

const search = () => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
        itemsFiltred.value = itemsBbdd.value.filter(e => removeAccents(e.name).toLowerCase().includes(removeAccents(song.value).toLowerCase()))
    }, 500); // Will do the ajax stuff after 1000 ms, or 1 s
}

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
  
const itemsBbdd = ref([])
const itemsFiltred = ref([])

onMounted(async()=>{
    const resp = await getMusic()
    itemsBbdd.value=resp.data.musics.reverse()
    itemsFiltred.value=resp.data.musics
    pagination.value.rowsPerPage = itemsBbdd.value.length
    loadingFirst.value=true
})
</script>
  
  <template>
      <q-table
      v-if="loadingFirst"
        style="margin:1rem"
        :rows="itemsFiltred"
        :columns="columns"
        row-key="name"
        flat
        bordered
        hide-header
        v-model:pagination="pagination"
        hide-bottom
        />
        <div v-else style="display:flex;flex-direction: column;align-items: center;width: 100%;margin-top: 1rem;">
    <q-circular-progress
        indeterminate
        rounded
        size="10rem"
        color="warning"
    />
</div>

  </template>
<style lang="scss">
  tbody tr:nth-child(odd) td{
      background-color: #FFF4B0;
      white-space: initial;
  }
  tbody tr:nth-child(even) td{
    background-color: white;
    white-space: initial;
  }
</style>