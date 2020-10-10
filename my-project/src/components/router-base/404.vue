<template>
  <div>
    <div>
      <h1>404</h1>
    </div>
    <button @click="goBack">返回上一级页面</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>