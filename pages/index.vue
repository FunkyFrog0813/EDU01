<template>
  <div class="">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!--<div>
      <div v-if="$auth.loggedIn">
        <h1 class="title">Welcome Back! {{ $auth.user.name }}</h1>
        <v-btn text to="/profile">View my profile</v-btn>
        <v-btn text to="/profile">View my enrollment</v-btn>
      </div>

      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>

      <div class="links"></div>
    </div>-->

    <div style="width:100%; text-align:center; overflow:auto;">
      <div class="botbanner" style="">
        <h1>Disruptive thinking for a better future</h1>
      </div>

      <div
        class="botbanner"
        style="background-color: rgb(0, 151, 169);color: white;font-weight: 400;font-size: larger;"
      >
        Visit our site for more detail<br /><br />
        <v-btn color="orange darken-2" dark>
          <v-icon light></v-icon>View more
        </v-btn>
      </div>
    </div>

    <div style="width:100%;">
      <div><h1>Our service</h1></div>

      <div>
        <div v-for="service in services" :key="service._id">
          <v-card class="fleft">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>{{ service.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ service.text }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div></div>
            </v-card-text>
            <v-card-actions>
              <NuxtLink :to="'/service/' + service._id">
                {{ service.title }}
              </NuxtLink>
              <v-btn color="Blue" text :to="'/service/' + service._id">
                View detail
              </v-btn>
              <v-btn color="orange" text>
                Not Interested
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      services: [{}]
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.services = this.$axios
        .get(`/api/v1/services`)
        .then(res => {
          this.services = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.botbanner {
  width: 50%;
  float: left;
  padding: 2rem;
  height: 160px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fleft {
  margin: 1%;
  float: left;
  width: 31%;
}
</style>
