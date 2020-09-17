<template>
  <q-card>
    <q-img :src="infos.img" spinner-color="white" class="img-card" />
    <p class="info-card">{{infos.desc}}</p>
  </q-card>
</template>

<script>
export default {
  props: ["infos"],
};
</script>

<style>
.info-card {
  padding: 5px;
  left: 8.27%;
  right: 51.73%;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;

  color: #757575;
}
</style>
