<template>
  <div>
    <div>
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs v-model="tab" inline-label :breakpoint="0" align="justify" class="shadow-2">
          <q-tab name="latest" label="Latest" />
          <q-tab name="popular" label="Popular" />
          <q-tab name="playlist" label="Playlist" />
        </q-tabs>
      </div>
    </div>

    <div class="row">
      <div class="col-6 p-3" v-for="i in 8" :key="i">
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
</style>
