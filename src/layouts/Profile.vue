<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title class="title">Header {{ name }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawer" side="left" bordered content-class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm menu">
        <q-img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xhJI30nPwAN1R7qesVXFCgHaHa%26pid%3DApi&f=1"
          spinner-color="white"
          class="perfil"
        />
        <div>
          <h1>User Teste</h1>
          <h2>Desenvolvedor Web</h2>
        </div>
        <ul class="menu-list">
          <li>
            <router-link to="/profile/">
              <q-icon name="person" />My Profile
            </router-link>
          </li>
          <li>
            <router-link to="/profile/dashboard">
              <q-icon name="local_activity" />Activity
            </router-link>
          </li>
          <li>
            <router-link to="/profile/following">
              <q-icon name="people" />Friends
            </router-link>
          </li>
          <li>
            <router-link to="/profile/gallery">
              <q-icon name="collections" />Gallery
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <q-icon name="exit_to_app" />Exit
            </router-link>
          </li>
        </ul>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawer: true,
      name: this.$route.params.id,
    };
  },
};
</script>

<style>
.menu {
  background-color: #ef5350;
  border-left: none;
  padding: 40px;
  color: #fff;
}

h1 {
  font-size: 25px;
  margin: 0;
  height: 60px;
}

h2 {
  font-size: 18px;
  margin: 0;
  padding: 0;
}

.menu-list {
  list-style: none;
  padding: 0;
}

li {
  padding-bottom: 15px;
}

a {
  text-decoration: none;
  color: #fff;
}

i {
  padding-right: 10px;
}

.perfil {
  border-radius: 150px;
  width: 100px;
  text-align: left;
}

.title {
  text-align: center;
}
</style>
