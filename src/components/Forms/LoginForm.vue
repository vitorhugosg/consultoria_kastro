<template>
  <q-form @submit="login()">
    <q-input type="email" color="primary" v-model="email" label="Email" />
    <q-input type="password" color="primary" v-model="password" label="Senha" />

    <q-btn unelevated color="primary" type="submit" rounded label="Login" class="full-width q-m-md mt-5" />
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      alert('Logou');
    }
  }
}
</script>

<style>

</style>
