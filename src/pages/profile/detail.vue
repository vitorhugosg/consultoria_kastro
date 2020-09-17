<template>
  <div>
    <div class="video row">
      <q-img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftopgamingchair.com%2Fwp-content%2Fuploads%2F2019%2F08%2F2719321-e1567249041602.jpg&f=1&nofb=1"
        spinner-color="white"
      />

      <div class="info-video">
        <q-img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xhJI30nPwAN1R7qesVXFCgHaHa%26pid%3DApi&f=1"
          spinner-color="white"
          class="perfil"
          width="50px"
        />
        <q-btn class="btn-subscriber">Subscriber</q-btn>
        <h1>Titulo do Canal</h1>
        <h2>18K follows</h2>
      </div>
    </div>

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
import PreviewVideo from "../../components/Cards/PreviewVideo";

export default {
  components: {
    PreviewVideo,
  },
  data() {
    return {
      tab: "mails",
    };
  },
};
</script>

<style>
.btn-subscriber {
  background: #fff;
  color: #ef5350;
  border: solid 1px #ef5350;
  border-radius: 25px;
  float: right;
}

.btn-subscriber:hover {
  color : #fff;
  background: #ef5350;
  border: solid 1px #fff;
}

.info-video {
  width: 100%;
  padding: 25px;
}

h1 {
  font-size: 20px;
  height: 40px;
}

h2 {
  font-size: 16px;
}
</style>
