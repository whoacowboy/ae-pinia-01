import { defineStore, getActivePinia } from "pinia";
export const getStore = (name) => {
  const store = getActivePinia()?._s.get(name);
  if (!store) throw new Error(`${name} store does not exist`);
  return store;
};
export const useDevCounterStore = defineStore("dev-counter", {
  state: () => ({
    counter: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
      const s = getStore("component-counter");
      s.increment();
    },
  },
});
