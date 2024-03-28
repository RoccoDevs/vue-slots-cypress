<script setup lang="ts">
import { useSlots } from 'vue'

defineProps<{
  msg: string
}>()

const slots = useSlots();

</script>

<template>
  <div class="greetings">
    <h3>topcomponent</h3>
    <div>
      <slot v-if="slots.default" />
    </div>
  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
