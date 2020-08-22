<template>
  <div>hi</div>
</template>

<script>
export default {
  validate({ params }) {
    return !isNaN(+params.id);
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await this.$axios.get(`/api/v1/services/${+params.id}`);
      return data;
    } catch (e) {
      error({ message: " not found", statusCode: 404 });
    }
  }
};
</script>

<style></style>>
