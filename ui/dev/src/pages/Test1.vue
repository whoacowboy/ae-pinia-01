<template>
  <q-page padding>
    <PiniaInDev /><br />
    {{ devCounter }}
    <q-btn @click="devCounterStore.increment()" label="Increase Dev" />
  </q-page>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useDevCounterStore } from "../stores/dev-counter";
const devCounterStore = useDevCounterStore();
const { counter: devCounter } = storeToRefs(devCounterStore);
</script>
<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
