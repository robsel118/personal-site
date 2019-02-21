<template>
  <v-container fluid class="alternate">
    <title-card title="Profile" subTitle="I am a developer"></title-card>
    <v-layout row wrap  justify-center fill-height>
      <v-flex xs12 md3 class="text-section left-section">
        <h5 class="headline green--text darken-2 font-weight-light mb-3">About me</h5>
        <v-flex tag="p" pr-3 class="body-1">
          Born in Canada, raised in Switzerland, currently living in Finland.
          I am currently studying towards a Master degree in Computer Science.
          I am always eager to learn about new topics,
          and I am an Virtual Reality enthusiast.
        </v-flex>
      </v-flex>
      <v-flex xs12 md2>
        <v-avatar :size="200" color="grey lighten-4">
          <img :src="require('@/assets/profile.jpg')" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex xs12 md3 class="text-section right-section">
        <h5 class="headline green--text darken-2 font-weight-light mb-3">Details</h5>
        <p class="body-1 font-weight-black">Name:</p>
        <p class="body-1">Robert Lee Seligmann</p>
        <p class="body-1 font-weight-black">Age:</p>
        <p class="body-1">23 years</p>
        <p class="body-1 font-weight-black">Location:</p>
        <p class="body-1">Helsinki, Finland, Earth</p>
        <p></p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TitleCard from './TitleCard.vue';

@Component({
  components: {
    TitleCard,
  },
})
export default class AboutMe extends Vue {}
</script>
<style lang="sass" scoped>
.text-section
  text-align: left
  @media screen and (max-width: 768px)
    text-align: center
  & .body-1
    margin-bottom: .5rem
    font-size: 0.9375rem

.left-section
  margin-bottom: 2rem
  @media screen and (min-width:  768px)
    padding-right: 1rem
    margin-bottom: 0

.right-section
  margin-top: 2rem
  @media screen and (min-width:  768px)
    padding-left: 2.5rem
    margin-top: 0

</style>
