<template>
  <div>
    <div>
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="tab" inline-label :breakpoint="0" align="justify" class="shadow-2">
          <q-tab name="home" label="Home" />
          <q-tab name="treding" label="Treding" />
          <q-tab name="popular" label="Popular" />
          <q-tab name="playlist" label="Playlist" />
        </q-tabs>
      </div>
    </div>

    <div class="video row">
      <q-img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftopgamingchair.com%2Fwp-content%2Fuploads%2F2019%2F08%2F2719321-e1567249041602.jpg&f=1&nofb=1"
        spinner-color="white"
      />
      <div class="row info-video">
        Apredendo a programar com quasar e vue js
      </div>
    </div>

    <h3>Gallery</h3>
    <div class="row gallery">
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
.info-video {
  padding: 20px;
  font-size: 18px;
  color: #757575;
}

h3 {
  font-size: 18px;
  color: #757575;
  padding-left: 20px;
  margin: 0;
}

</style>
