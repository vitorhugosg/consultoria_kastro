<template>
  <q-page id="loginPage">
    <div>
        <h1>Login</h1>

        <LoginForm/>

        <div class="div-links">
          <router-link to="/">Esqueci senha</router-link>
          <router-link to="/register">Cadastro</router-link>
        </div>
    </div>
  </q-page>
</template>

<script>
import LoginForm from '../../components/Forms/LoginForm';

export default {
  components: {
    LoginForm
  }
}
</script>

<style>
h1 {
  font-size: 30px;
}

#loginPage {
  text-align: center;
  margin: 10px;
}

#loginPage * {
  display: block;
}

.div-links {
  margin-top: 50px;
}

.div-link>a {
  padding: 15px;
}
</style>
