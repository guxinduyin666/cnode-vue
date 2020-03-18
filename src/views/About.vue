<template>
  <div class="about">
    <loading tip="加载中。。。" :isShowLoading="true" />
  </div>
</template>
<script>
import loading from "@/components/Loading.vue";
export default {
  name: "about",
  components: {
    loading
  }
};
</script>
<style scoped>
</style>
