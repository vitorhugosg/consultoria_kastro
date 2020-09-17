<template>
  <div>
    <div class="header">
      <h1>Lizzia Aguilar</h1>
      <h2>Desenvolvedora Web</h2>
    </div>
    <LikesFollower />
    <div class="row">
      <div class="col-6 p-3" v-for="i in 4" :key="i">
        <PreviewVideo
          :infos="{
                img: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60',
                desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, omnis.'
            }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LikesFollower from "../../components/Cards/LikesFollowers";
import PreviewVideo from "../../components/Cards/PreviewVideo";
export default {
  components: {
    LikesFollower,
    PreviewVideo,
  },
  data() {
    return {
      infos: {},
    };
  },
};
</script>

<style>
.header {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url("../../assets/images/img_home.png");
  padding-left: 10%;
  background-size: cover;
  color: #fff;
  height: 300px;
  padding-top: 136px;
}

h1 {
  font-size: 25px;
  font-weight: 400;
}

h2 {
  font-size: 15px;
  font-weight: 300;
}
</style>
