<template>
  <q-page id="indexPage">
    <div class="position-absulute-buttons full-width">
      <div class="row">
        <div class="col-12 p-3">
          <q-btn
            unelevated
            rounded
            color="primary"
            label="Login"
            class="full-width q-m-md"
            to="/login"
          />
        </div>
        <div class="col-12 p-3">
          <q-btn
            unelevated
            rounded
            color="primary"
            label="Register"
            class="full-width q-m-md"
            to="/register"
          ></q-btn>
        </div>
      </div>
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="jump-up"
      transition-next="jump-down"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="760px"
      class="bg-secondary text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <h5 class="q-py-none">ShareVid</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <h5 class="q-py-none">ShareVid</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <h5 class="q-py-none">ShareVid</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <h5 class="q-py-none">ShareVid</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      slide: "style",
      lorem: "Teste levantelab"
    };
  }
};
</script>

<style>
#indexPage .q-carousel__navigation-inner {
  margin-bottom: 80px;
}

#indexPage .position-absulute-buttons {
  position: absolute;
  top: 20px;
  z-index: 20;
}
</style>
