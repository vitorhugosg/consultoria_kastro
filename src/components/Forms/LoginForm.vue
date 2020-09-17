<template>
  <q-form @submit="login()">
    <q-input type="email" :rules="[validate]" color="primary" v-model="form.email" label="Email" label-color="white" />

    <q-input
      type="password"
      :rules="[
        val => val.length > 6 || 'Seu password deve ter mais de 6 caracteres',
        val => val.length < 50 || 'Seu password deve ter mais de 50 caracteres'
      ]"
      color="primary"
      v-model="form.password"
      label="Senha"
      label-color="white"
    />

    <q-btn
      unelevated
      color="primary"
      type="submit"
      :loading="loader"
      rounded
      label="Login"
      class="full-width q-m-md mt-5"
    />
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loader: false,
    };
  },

  methods: {
    login() {
      this.loader = true;
      this.$q.loading.show();
      this.$axios
        .post("api/login")
        .then((res) => {
          this.$q.notify({
            message: "Foi logado com sucesso",
            position: "top",
            color: "green",
          });
        })
        .catch((err) => {
          this.$router.push("/profile");
          this.$q.notify({
            message: "Houve uma falha ao logar usuário",
            position: "top",
            color: "red",
          });
        })
        .finally(() => {
          this.$q.loading.hide();
          this.loader = false;
        });
    },
    validate(val) {
      if (val.length > 6) {
        return true;
      } else {
        return "Você deve ter mais de 6 caracteres";
      }
    },
  },
};
</script>

<style>
</style>
