<template>
  <v-container>
  
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link @click="changeBar('home')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="changeBar('enrollment')">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>enrollment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container v-if="navigationBar=='home'"
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">

            
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

    
          </v-col>
        </v-row>
      </v-container>



      <v-container v-if="navigationBar=='enrollment'"
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">

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
          <v-btn color="Blue" text>  <NuxtLink :to="'/enrollment/' + enrollment._id" target="_blank">
                   View detail
              </NuxtLink>
          </v-btn>
          <v-btn color="orange" text>
            Not Interested
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    
          </v-col>
        </v-row>
      </v-container>


    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>

  </v-container>
  
</template>

<script>
export default {
  components: {
    
  },
  data: function() {
    return {drawer: null,
      navigationBar:"home",
      enrollments: [{}]
    };
  },
  created() {
    this.init();
    console.log(this.enrollments);
  },
  methods: {
     changeBar(name) {
     this.navigationBar=name
    },
    init() {
      this.enrollments = this.$axios
        .get(`/api/v1/users/${this.$auth.user.id}/enrollment`)
        .then(res => {
          console.log(res);
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
