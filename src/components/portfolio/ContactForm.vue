
<template>
  <v-footer dark height="auto">
    <v-layout column>
      <v-card width="100%" flat tile class="lighten-1 white--text text-xs-center">
        <title-card title="Contact" subTitle="Reach me on other platform"></title-card>
        <v-card-text>
          <v-tooltip bottom>
            <template #activator="data">
              <v-btn
                v-on="data.on"
                href="https://www.linkedin.com/in/robert-seligmann/"
                target="_blank"
                class="mx-3 white--text"
                icon
              >
                <v-icon size="24px">fab fa-linkedin</v-icon>
              </v-btn>
            </template>
            <span>linkedin.com/in/robert-seligmann/</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template #activator="data">
              <v-btn
                v-on="data.on"
                href="https://github.com/robsel118"
                target="_blank"
                class="mx-3 white--text"
                icon
              >
                <v-icon size="24px">fab fa-github</v-icon>
              </v-btn>
            </template>
            <span>github.com/robsel118</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template #activator="data">
              <v-btn
                v-on="data.on"
                href="mailto:robertleeseligmann@gmail.com"
                target="_blank"
                class="mx-3 white--text"
                icon
              >
                <v-icon size="24px">alternate_email</v-icon>
              </v-btn>
            </template>
            <span>robertleeseligmann@gmail.com</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template #activator="data">
              <v-btn
                v-on="data.on"
                href="http://transcend.ch/"
                target="_blank"
                class="mx-3 white--text"
                icon
              >
                <v-avatar size="24" color="grey lighten-4">
                  <img :src="require('@/assets/transcend.png')" alt="Transcent">
                </v-avatar>
              </v-btn>
            </template>
            <span>Transcend.ch</span>
          </v-tooltip>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 —
          <strong>Robert Lee Seligmann</strong>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleCard from './TitleCard.vue';
@Component({
  components: {
    TitleCard,
  },
})
export default class ContactForm extends Vue {}
</script>
