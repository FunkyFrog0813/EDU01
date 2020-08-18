<template>
  <enrollment />
</template>

<script>
import enrollment from "../components/enrollment.vue";
export default {
  components: {
    enrollment
  },
  data: function() {
    return {
      enrolment: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init: async () => {
      this.enrollment = await this.$axios.$get(
        `/api/v1/users/${$auth.user.id}`
      );
    },

    expandSection(num) {
      console.log(`clicked ${event}`);
      if (this.items[num].class == "slds-is-open") {
        this.items[num].class = "slds-is-close";
      } else {
        this.items[num].class = "slds-is-open";
      }
    }
  }
};
</script>
<style></style>
