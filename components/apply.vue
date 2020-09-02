<template>
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
         <v-row align="center">
  
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      class="form"
    >
      <v-text-field
      v-model="title"
        label="title"
        :counter="10"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="email"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="continueForm"
        
      >
        Next
      </v-btn>
    </v-form>
    

  </v-row>
      </div>
      <div v-else>
         <login></login>
      </div>
   
   
</template>



<script>
import login from '../pages/login';

export default {
    name:"apply",
   
    components:{
        login,
    }, 

    data(){
        return{ valid: true,
      title: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      lazy: false,
      enrollment:{}
        }
    },

    methods: {
        async continueForm() {
      try {
          
        const datatosent = {title:this.title,status:"Applied"}
        await this.$axios.post(`/api/v1/services/${this.$route.params.id}/enrollment`, datatosent);
        window.location.href='/offering';
       console.log("good");
      } catch (error) {
        console.log(error)
      }
    },
      
        reset () {
        this.$refs.form.reset()
      },
    
}
}
</script>


<style scoped>
.form {
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
 
}
</style>