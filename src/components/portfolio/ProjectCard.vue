<template>
  <v-hover>
    <v-card slot-scope="{ hover }" class="mx-auto mb-5" color="grey lighten-4" max-width="350px">
      <v-img :src="require(`@/assets/${imageURI}`)" height="280px">
        <v-btn
          v-if="projectURL!=''"
          :href="projectURL"
          target="_blank"
          absolute
          depressed
          fab
          right
          class="v-btn-link"
        >
          <v-icon class="v-icon-link">launch</v-icon>
        </v-btn>
        <v-tooltip bottom v-if="projectURL===''">
          <template #activator="data">
            <v-btn
              v-if="projectURL===''"
              absolute
              depressed
              fab
              right
              v-on="data.on"
              class="v-btn-link no-url"
            >
              <v-icon class="v-icon-link">visibility_off</v-icon>
            </v-btn>
          </template>
          <span>Private code</span>
        </v-tooltip>

        <v-fade-transition>
          <v-layout v-if="hover">
            <v-flex xs12 class="green v-card--reveal darken-4 white--text" style="height: 100%;">
              <v-flex tag="h1">{{projectName}}</v-flex>
              <v-progress-linear color="white" height="2" value="100"></v-progress-linear>
              <v-flex tag="p" class="body-1">{{projectDesc}}</v-flex>
              <v-flex tag="p" class="body-1 font-weight-black">Tags:</v-flex>
              <v-flex tag="p" class="body-1">{{projectTags}}</v-flex>
            </v-flex>
          </v-layout>
        </v-fade-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script lang="ts" scoped>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProjectCard extends Vue {
  @Prop({ required: true })
  imageURI: string;

  @Prop({ required: true })
  projectName: string;

  @Prop({ required: true })
  projectDesc: string;

  @Prop({ required: true })
  projectTags: string;

  @Prop({ default: '' })
  projectURL: string;

  show: Boolean = false;
}
</script>
<style lang="sass">
.v-card--reveal
  position: absolute
  align-items: left
  bottom: 0
  justify-content: left
  opacity: 0.7
  position: absolute
  width: 100%
  padding: 2rem
  text-align: left
  & p, & h1
    opacity: 1

.v-btn-link
  right: 0 !important
  width: 2.5rem !important
  height: 2.5rem !important
  border-radius: 0 !important
  &.no-url:hover
    cursor: initial !important
.v-icon-link
  height: 1.8rem !important
</style>
