<template>
  <q-page id="registerPage">
    <div>
      <h1>Register</h1>

      <RegisterForm />

      <div class="div-links">
        <router-link to="/login" style="color: #FFF; text-decoration: none;">Já tenho um cadastro</router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import RegisterForm from "../../components/Forms/RegisterForm";

export default {
  components: {
    RegisterForm,
  },
};
</script>

<style>
h1 {
  font-size: 30px;
}

#registerPage {
  text-align: center;
  padding: 10px;
  color: #fff;
  background: linear-gradient(rgba(255, 10, 255, 0.2), rgba(255, 10, 255, 0.2)),
    url("../../assets/images/bg_form.png") no-repeat;
  background-size: cover;
}

#registerPage * {
  display: block;
}

.div-links {
  margin-top: 50px;
}

.div-link > a {
  padding: 15px;
}

form {
  margin-top: 25px;
}

</style>
