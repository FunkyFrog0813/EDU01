<template>
  <div :service="service" class="nwo">
     <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">{{ service.title }}</h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card
          color="basil"
          flat
        >
        <h2><hr>Service Description 01</h2>
          <v-card-text>{{ service.text }}</v-card-text>
        <h2><br>Service Description 02</h2>
          <v-card-text>{{ service.text }}</v-card-text>
        <h2><br>Service Description 03</h2>
          <v-card-text>{{ service.text }}</v-card-text>
        <h2><br>Service Description 04</h2>
          <v-card-text>{{ service.text }}</v-card-text>
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
        <v-card
          color="basil"
          flat
        >
        <h2><hr>Entry Requirement</h2>
          <v-card-text>{{ service.text }}</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card
          color="basil"
          flat
        >
        <h2><hr>Fee</h2>
          <v-card-text>{{ service.text }}</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card
          color="basil"
          flat
        >
        <apply></apply>
   
        </v-card>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
  </div >
     
  
</template>

<script>
import apply from '../../components/apply.vue';

export default {
  data: function() {
    return {
      service: {},
      tab: null,
        items: [
          'Description', 'Entry Requirement', 'Fee', 'Apply Now',
        ],
      Description:{},
        
    };
  },
  created() {
    this.init();
    
  },
  methods: {
    init() {
  
      this.enrollments = this.$axios
        .get(`/api/v1/services/${this.$route.params.id}`)
        .then(res => {
          console.log(res);
          this.service = res.data.data;
          console.log(this.service)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
