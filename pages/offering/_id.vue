<template>
  <div class="nwo">hello {{ this.$route.params }}</div>
</template>

<script>
export default {
  data: function() {
    return {
      service: {}
    };
  },
  created() {
    this.init();
    console.log(this.enrollments);
  },
  methods: {
    init() {
      console.log(this.$route.params);
      this.enrollments = this.$axios
        .get(`/api/v1/services/${this.$route.params.id}`)
        .then(res => {
          console.log(res);
          this.service = res.data.data;
          console.log(this.service);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>>
