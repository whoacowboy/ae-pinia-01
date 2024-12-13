<template>
  <div class="component">
    {{ componentCounter }}
    <q-btn
      @click="componentCounterStore.increment()"
      label="Increase Component"
    />
  </div>
</template>
<script setup>
import { useComponentCounterStore } from '../stores/component-counter'
const componentCounterStore = useComponentCounterStore()
const { counter: componentCounter } = storeToRefs(componentCounterStore)
</script>
<style lang="scss">
.component {
}
</style>
