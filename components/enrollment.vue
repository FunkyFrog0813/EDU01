<template>
<v-container>
  <formWizard />
   
    
  <v-card class="mx-auto" max-width="400">
 
  </v-card>
 
</v-container>
  
</template>


<script>
import formWizard from './form-wizard.vue';
export default {
  name:'enrollment',
  props: {
    item: {}
  },
  components:{
    formWizard
  }
};
</script>
>
