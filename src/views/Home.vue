<template>
  <div class="home">
    <div>
      <img src="@/assets/logo_blanc-12.png" alt="logo du jeu" />
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
    img {
      width: 100%;
      max-width: 900px;
    }
  }
 
}
</style>
