<script setup>
import { ref, inject } from 'vue'
// defineProps(['data']) 
const xdata = inject('mydata')  
const msg = inject('message')
</script>
<template>
    <h2 class="my-5">Child Component</h2>
    <p>{{ msg }}</p>
    <p>
        <button @click="xdata.increase()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            +++
        </button>
        <button  @click="xdata.decrease()" class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ---
        </button>
    </p>

</template>
<style></style>