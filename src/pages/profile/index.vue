<template>
  <div>
    <q-img
      src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"
      spinner-color="white"
    />
    <LikesFollower/>
    <div class="row">
       
        <div class="col-6 p-3" v-for="i in 22" :key="i">
            <PreviewVideo :infos="{
                img: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60',
                desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, omnis.'
            }" />
        </div>
    </div>
  </div>
</template>

<script>
import LikesFollower from '../../components/Cards/LikesFollowers'
import PreviewVideo from '../../components/Cards/PreviewVideo'
export default {
    components:{
        LikesFollower,
        PreviewVideo
    },
    data(){
        return{
            infos:{}
        }
    }
};
</script>

<style></style>
