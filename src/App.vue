<template>
  <v-app id="app" transition="fade-transition" :dark="isDarkMode">
    <div id="nav">
      <v-system-bar window>
        <v-spacer></v-spacer>
        <v-btn @click="toggleDarkMode(!isDarkMode)" flat icon>
          <v-icon class="center-icon">wb_sunny</v-icon>
        </v-btn>
      </v-system-bar>
    </div>
    <router-view/>
  </v-app>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { retrieveItem } from '@/storage/StorageHandler';
import { mapActions } from 'vuex';

@Component
export default class App extends Vue {
  mounted() {
    this.retrieveFromStorage();
  }

  get isDarkMode() {
    return this.$store.getters.isDarkMode;
  }

  toggleDarkMode(isDark: boolean) {
    const payload = {
      darkMode: isDark,
    };
    this.$store.dispatch('toggleDarkMode', payload);
  }

  retrieveFromStorage() {
    const isDark: boolean = retrieveItem('darkMode');
    this.toggleDarkMode(isDark);
  }
}
</script>


<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons")
@import ./stylesheets/main
*
  transition:  background .2s ease-out, opacity .2s ease-out

#app
  font-family: $montserrat
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  transition:  background .2s ease-out, opacity .2s ease-out
  &.theme--light div.container.alternate
    background: #F3EFE0
  &.theme--dark div.container.alternate
    background: #4c5454
  &.theme--dark
    color: white

.center-icon
  margin-right: 0 !important

</style>
