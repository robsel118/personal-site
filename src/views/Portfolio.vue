<template>
  <div>
    <parallax-item
      url="https://media-cdn.tripadvisor.com/media/photo-m/1280/16/21/af/e7/chetzeron.jpg"
    ></parallax-item>
    <about-me></about-me>
    <v-divider></v-divider>
    <experience-list></experience-list>
    <v-divider></v-divider>
    <v-container fluid class="alternate">
      <project-list></project-list>
    </v-container>
    <contact-form></contact-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ParallaxItem from '@/components/portfolio/ParallaxItem.vue';
import ExperienceList from '@/components/portfolio/ExperienceList.vue';
import ProjectList from '@/components/portfolio/ProjectList.vue';
import AboutMe from '@/components/portfolio/AboutMe.vue';
import ContactForm from '@/components/portfolio/ContactForm.vue';

@Component({
  components: {
    ParallaxItem,
    ExperienceList,
    ProjectList,
    AboutMe,
    ContactForm,
  },
})
export default class Portfolio extends Vue {}
</script>
