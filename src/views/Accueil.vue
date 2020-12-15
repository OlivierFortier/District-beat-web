<template>
  <div class="home">
    <div>
      <img src="@/assets/logo_rose.png" alt="logo du jeu" />
    </div>
    <video width="980" height="640" controls>
      <source src="@/assets/districtBeatDemo.mp4" type="video/mp4" />
    </video>
    <Introduction />
  </div>
</template>

<script>
import Introduction from "@/components/Introduction.vue";

export default {
  name: "Accueil",
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
    display: flex;
    justify-content: center;
    img {
      filter: drop-shadow(2px 4px 6px black);
      width: 100%;
      max-width: 900px;
    }
  }
}

video {
  width: 100%;
}
</style>
