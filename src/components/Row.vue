<script setup>
import { ref } from "vue";

const props = defineProps({
    row: {
        type: Object,
        required:true,
    },
    index: {
        type: Number,
        required:true
    },
    indexActive: {
        type: Number,
        required:false,
        default:null
    }
})
const loading = ref(false)
const emit = defineEmits(['addSong','stopSong','playSong'])

const addSong = () => emit('addSong',props.row)

const stopSong = () => emit('stopSong')

const playSong = () => emit('playSong',{index:props.index,idSong:props.row.id})


</script>

<template>
    <div style=" display: flex;justify-content: space-between;align-items: center;background-color: black;border-radius: 5px;margin-bottom: 0.2rem; " :class="{playing:props.index == props.indexActive}">
        <div>
            <q-btn v-if="props.index !== props.indexActive" color="transparent" icon="play_circle" :disable="loading" @click="playSong()" />
            <q-btn v-if="props.index == props.indexActive" color="transparent" icon="pause_circle" :disable="loading" @click="stopSong() " />
        </div>
        <div style="color:white;text-align: center">{{ row.name }}</div>
        <div>
            <q-btn color="transparent" icon="playlist_add" :disable="loading" @click="addSong()"/>
        </div>
    </div>
</template>
<style scoped>
.playing {
    background: linear-gradient(270deg, #000000, #818181, #000000);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 7s ease infinite;
    -moz-animation: AnimationName 7s ease infinite;
    animation: AnimationName 7s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>
