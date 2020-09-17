<template>
  <q-page id="loginPage">
    <div>
      <h1>Login</h1>

      <LoginForm />

      <div class="div-links">
        <router-link to="/" style="color: #FFF; text-decoration: none; padding: 5px;">Esqueci senha</router-link>
        <router-link to="/register" style="color: #FFF; text-decoration: none; padding: 5px;">Cadastro</router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import LoginForm from "../../components/Forms/LoginForm";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style>
h1 {
  font-size: 30px;
}

#loginPage {
  text-align: center;
  margin: 0px;
  padding: 10px;
  color: #FFF;
  background: linear-gradient(rgba(10, 10, 255, 0.2), rgba(10, 10, 255, 0.2)),
    url("../../assets/images/bg_form.png") no-repeat;
  background-size: cover;
}

#loginPage * {
  display: block;
}

.div-links {
  margin-top: 50px;
}

.div-link > a {
  padding: 105px;
}
</style>
