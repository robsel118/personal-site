<template>
  <div>
    <title-card
      title="Projects"
      subTitle="“If you endeavor to achieve, it will happen given enough resolve.”"
      subSubTitle="- Monty Oum"
    ></title-card>
    <v-layout align-center justify-space-around>
      <v-flex d-flex xs12 sm8 offset-sm-2>
        <v-layout row wrap>
          <v-flex md6 xs12>
            <project-card
              projectName="Personal Website"
              projectDesc="Site made to train for full-stack development
               (VENoM stack). Backend still under construction"
              projectTags="VueJS, Vuetify, Express, NodeJS, MongoDB"
              projectURL="https://github.com/robsel118/personal-site"
              imageURI="website.png"
            ></project-card>
          </v-flex>
          <v-flex xs12 md6>
            <project-card
              projectName="SpookAR"
              projectDesc="An AR game where you try to survive waves of ghosts"
              projectTags="Hackathon, Unity, AR, Gesture Recognition"
              projectURL="https://github.com/robsel118/huawei-hackathon"
              imageURI="spookar.png"
            ></project-card>
          </v-flex>
          <v-flex xs12 md6>
            <project-card
              projectName="Escape Room VR"
              projectDesc="A VR online multiplayer VR escape room game."
              projectTags="Hackathon, Unity, VR, Puzzle"
              imageURI="vr-hackathon.jpg"
            ></project-card>
          </v-flex>
          <v-flex xs12 md6>
            <project-card
              projectName="Musticly"
              projectDesc="A 2D platformer centered around sounds and colours"
              projectTags="Hackathon, Unity, 2D, Game Jam"
              projectURL="https://github.com/robsel118/Musticly"
              imageURI="musticly.png"
            ></project-card>
          </v-flex>
          <v-flex xs12 md6>
            <project-card
              projectName="Arkathon project"
              projectDesc="VR simulation of a medical intervention in a hazardous environment"
              projectTags="Hackathon, Unity, VR, Medical Simulation"
              imageURI="arkathon.jpg"
            ></project-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleCard from './TitleCard.vue';
import ProjectCard from './ProjectCard.vue';

@Component({
  components: {
    ProjectCard,
    TitleCard,
  },
})
export default class ProjectList extends Vue {}
</script>
