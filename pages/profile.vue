<template>
  <v-container>
    <v-card class="mx-auto" max-width="434" tile>
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">{{
                  $auth.user.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  $auth.user.email
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>

    <div v-for="enrollment in enrollments" :key="enrollment._id">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>{{ enrollment.service.title }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{
          enrollment.status[0]
        }}</v-card-subtitle>
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
    </div>
  </v-container>
</template>

<script>
import enrollment from "../components/enrollment.vue";
export default {
  components: {
    enrollment
  },
  data: function() {
    return {
      enrollments: [{}]
    };
  },
  created() {
    this.init();
    console.log(this.enrollments);
  },
  methods: {
    init() {
      this.enrollments = this.$axios
        .get(`/api/v1/users/${this.$auth.user.id}/enrollment`)
        .then(res => {
          this.enrollments = res.data.data;
          console.log(this.enrollments);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>>
