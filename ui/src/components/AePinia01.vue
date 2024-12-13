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
import { storeToRefs } from 'pinia'
defineOptions({
  name: 'AePinia01',
  inheritAttrs: false,
})

const componentCounterStore = useComponentCounterStore()
const { counter: componentCounter } = storeToRefs(componentCounterStore)
</script>
<style lang="scss">
.component {
}
</style>
