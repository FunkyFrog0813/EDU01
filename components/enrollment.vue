<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ item.service.text }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">{{ item.status }}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div></div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="Blue" text>
        View detail
      </v-btn>
      <v-btn color="orange" text>
        Not Interested
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    item: {}
  }
};
</script>
>
