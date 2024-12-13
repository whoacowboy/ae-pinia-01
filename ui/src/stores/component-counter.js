import { defineStore, getActivePinia } from 'pinia'

export const useComponentCounterStore = defineStore('component-counter', {
  state: () => ({
    counter: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2
    },
  },

  actions: {
    increment() {
      this.counter++
    },
  },
})
