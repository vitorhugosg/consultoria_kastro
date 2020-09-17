<template>
  <q-card class="card">
    <q-img :src="infos.img" spinner-color="white" class="img-card" />
    <div class="card-body">
      <p class="name">{{infos.name}}</p>
      <p class="profession">{{infos.profession}}</p>
      <q-btn
        unelevated
        rounded
        color="primary"
        label="Unfollow"
        class="btn-follower"
        style="border-radius: 250px !important"
      />
    </div>
  </q-card>
</template>

<script>
export default {
  props: ["infos"],
};
</script>

<style>
.card {
  color: #fff;
  background-color: #ef5350;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
}

.img-card {
  width: 50px;
  margin-top: 25px;
  margin-bottom: 5px;
}

.name,
.profession {
  height: auto;
  margin: 0;
  padding: 0;
  padding-top: 5px;
}

.name {
  font-weight: 400;
}

.profession {
  font-weight: 300;
}

.btn-follower {
  color: #fff;
  background-color: #ef5350;
  border: 1px solid #fff;
  margin-top: 10px;
}
</style>
