<template>
  <div>
    <div class="row">
      <div class="col-6 p-3" v-for="i in 8" :key="i">
        <Follower
          :infos="{
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xhJI30nPwAN1R7qesVXFCgHaHa%26pid%3DApi&f=1',
                name: 'Name',
                profession: 'profession'
            }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Follower from "../../components/Cards/Follower";

export default {
  components: {
    Follower,
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
