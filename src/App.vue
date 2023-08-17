<script setup>
import {ref, reactive} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ButtonComponent from './components/ButtonComponent.vue';
import SlotComponent from './components/SlotComponent.vue';
const msg = ref("Hello World")
function clickHandlerOne() {
  msg.value = "Click One"
}

function clickHandlerTwo() {
  msg.value = "Click Two"
}
</script>

<template>
  <h2 class="text-2xl my-10">Slot</h2>
  <p class="my-5">
    {{ msg }}
  </p>
  <p>
    <ButtonComponent :clickHandler="clickHandlerOne">
      <em>Button One</em>
    </ButtonComponent>

  </p>
  <p class="my-5">
    <!-- <ButtonComponent label="Button Two" :clickHandler="clickHandlerTwo"/> -->
    <ButtonComponent :clickHandler="clickHandlerTwo">
      Button Two
    </ButtonComponent>
  </p>

  <SlotComponent>
    Default Content 123      
    <template v-slot:footer>
      <h2 class="text-xl my-10">This is footer</h2>  
    </template>
    <template #header>
      <h2 class="text-2xl my-10">This is Heading</h2>  
    </template>
    
  </SlotComponent>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
