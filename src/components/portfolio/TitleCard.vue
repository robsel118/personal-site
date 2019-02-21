<template>
  <v-flex xs8 offset-xs2 mb-4 mt-4>
    <h3 class="green--text darken-2 display-2 mb-4">{{title}}</h3>
    <h6 class="title font-weight-light mb-2">{{subTitle}}</h6>
    <h6 class="title font-weight-light mb-4">{{subSubTitle}}</h6>
    <v-divider></v-divider>
  </v-flex>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TitleCard extends Vue {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subTitle: string;

  @Prop()
  subSubTitle: string;
}
</script>
<style lang="sass">
@import ../../stylesheets/main
.title
  font-family: $montserrat
  font-size: 1.5rem
</style>
