<template>
  <v-container>
    <title-card
      title="Experiences"
      subTitle="“Protons give an atom its identity, electrons its personality.”"
      subSubTitle="- Bill Bryson, A short history of nearly everything"
    ></title-card>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-timeline dense clipped>
          <v-timeline-item class="mb-4" hide-dot>
            <span class="subheading">EDUCATIONS</span>
          </v-timeline-item>
          <v-timeline-item
            v-for="(education, index) in experiences.educations"
            :key="index"
            color="orange"
            icon="school"
            small
            right
            fill-dot
          >
            <v-chip
              class="white--text ml-0"
              label
              color="grey"
            >{{education.start}} - {{education.end}}</v-chip>
            <v-layout>
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <v-layout align-start justify-start column fill-height slot="header">
                    <v-flex class="font-weight-bold" v-text="education.position"></v-flex>
                    <v-flex v-text="education.establishment"></v-flex>
                  </v-layout>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-flex v-text="education.description"></v-flex>
                    <v-layout row align-content-center mt-1>
                      <v-flex shrink>
                        <v-icon mini color="green darken-2">location_on</v-icon>
                      </v-flex>
                      <v-flex
                        pt-1
                        class="green--text darken-2"
                        v-text="education.location">
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item class="mb-4" hide-dot>
            <span class="subheading">CAREERS</span>
          </v-timeline-item>
          <v-timeline-item
            v-for="(career, index) in experiences.careers"
            :key="experiences.educations.length + index"
            color="red"
            icon="work"
            small
            right
            fill-dot
          >
            <v-chip
              class="white--text ml-0 body-1"
              label
              color="grey"
            >{{career.start}} - {{career.end}}</v-chip>

            <v-layout>
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <v-layout align-start justify-start column fill-height slot="header">
                    <v-flex class="font-weight-bold" v-text="career.position"></v-flex>
                    <v-flex v-text="career.establishment"></v-flex>
                  </v-layout>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-flex v-text="career.description"></v-flex>
                    <v-layout row align-content-center mt-1>
                      <v-flex shrink>
                        <v-icon mini color="green darken-2">location_on</v-icon>
                      </v-flex>
                      <v-flex
                        pt-1
                        class="green--text darken-2"
                        v-text="career.location">
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import TitleCard from './TitleCard.vue';
import experiences from '@/data/experiences';
@Component({
  components: {
    TitleCard,
  },
})
export default class ExperienceList extends Vue {
  experiences: object = experiences;
}
</script>
