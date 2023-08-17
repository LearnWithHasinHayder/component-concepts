<script setup>
import { ref, inject } from 'vue'
// defineProps(['data'])
import ChildComponent from './ChildComponent.vue';
import ChildCompoentX from './ChildCompoentX.vue';
const data = inject('mydata')
</script>
<template>
    <h2>Parent Component</h2>
    <p class="my-2 text-green-700">
        {{ data.message }} | {{ data.count }}
    </p>
    <p>
        <ChildComponent />
    </p>
    <p>
        <ChildCompoentX />
    </p>
</template>
<style></style>