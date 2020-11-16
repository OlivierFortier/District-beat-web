<template>
  <div class="home">
    <div>
      <h1>District Beat</h1>
      <h2>Beat'em up</h2>
    </div>
    <Introduction />
  </div>
</template>

<script>
import Introduction from "@/components/Introduction.vue";

export default {
  name: "Home",
  components: {
    Introduction
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 80%;
  margin: 0 auto;
  height: auto;
  div {
    margin: 5% 0;
  }
 
}
</style>
