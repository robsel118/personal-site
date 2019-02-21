<template>
  <v-parallax :src="url">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-regular mb-3">Robert Seligmann</h1>
      <h4 class="subheading">Computer Science Master Student</h4>
    </v-layout>
  </v-parallax>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ParallaxItem extends Vue {
  @Prop()
  url!: String;
}
</script>
