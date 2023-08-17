<script setup>
import { ref, inject } from 'vue'
// defineProps(['data']) 
import {ydata} from '../data/ydata'
</script>
<template>
    <h2 class="my-5">Child X Component</h2>
    <p>
        <button @click="ydata.increase()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            +++
        </button>
        <button  @click="ydata.decrease()" class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ---
        </button>
    </p>

</template>
<style></style>