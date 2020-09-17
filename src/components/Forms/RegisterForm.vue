<template>
  <q-form @submit="register()">
    <q-input
      type="email"
      :rules="[
        val => val.length < 6 || 'Você deve ter mais de 6 caracteres',
      ]"
      color="primary"
      v-model="form.email"
      label="Email"
      label-color="white"
    />

    <q-input
      type="text"
      :rules="[
        val => val.length < 6 || 'Você deve ter mais de 6 caracteres',
      ]"
      color="primary"
      v-model="form.name"
      label="Nome"
      label-color="white"
    />

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
    <q-input
      type="password"
      :rules="[
        val => val.length > 6 || 'Seu password deve ter mais de 6 caracteres',
        val => val.length < 50 || 'Seu password deve ter mais de 50 caracteres'
      ]"
      color="primary"
      v-model="form.confim_password"
      label="Confirmação Senha"
      label-color="white"
    />

    <q-btn
      unelevated
      color="primary"
      type="submit"
      :loading="loader"
      rounded
      label="Cadastrar"
      class="full-width q-m-md mt-3"
    />
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        confirm_password: "",
      },
      loader: false
    };
  },

  methods: {
    register() {
      this.loader = true;
      this.$q.loading.show();
      this.$axios
        .post("api/login")
        .then(res => {
          this.$q.notify({
            message: "Foi logado com sucesso",
            position: "top",
            color: "green"
          });
        })
        .catch(err => {
          this.$router.push('/profile')
          this.$q.notify({
            message: "Houve uma falha ao logar usuário",
            position: "top",
            color: "red"
          });
        })
        .finally(() => {
          this.$q.loading.hide();
          this.loader = false;
        });
    },
  }
};
</script>

<style></style>
