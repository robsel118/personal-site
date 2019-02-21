<template>
  <registration-form></registration-form>
</template>
<script lang="ts">
import RegistrationForm from '@/components/RegistrationForm.vue';

import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    RegistrationForm,
  },
})
export default class Registration extends Vue {}
</script>
