<template>
<v-app>
  <div id="app">
    <p>{{ message }}</p>
    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
  </div>
</v-app>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>