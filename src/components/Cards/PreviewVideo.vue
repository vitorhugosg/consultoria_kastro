<template>
  <q-card>
    <q-img
      :src="infos.img"
      spinner-color="white"
    />
    <p>
      {{infos.desc}}
    </p>

    
  </q-card>
</template>

<script>
export default {
    props:[
        'infos'
    ]
};
</script>

<style></style>
