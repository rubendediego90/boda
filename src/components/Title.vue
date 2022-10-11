<script setup>
    defineProps({
        title: {
            type: String,
            default: false
        }
    })
</script>

<template>
    <div style=" display: flex;justify-content: center;align-items: center">
        <p class="title" >{{title}}</p>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.title{
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;

}
</style>