<template>
  <div id="app">
    <h1>Vue Component!!!</h1>
    <div
      id="test"
    >
      {{ name }}
    </div>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
    };
  },
  methods: {

  },
};
</script>

<style lang="scss">
</style>
