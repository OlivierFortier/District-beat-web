<template>
  <div v-if="this.estMobile" id="avertissement-mobile">
    <div class="nes-container is-rounded fond-blanc">
      <span class="nes-text is-error">Erreur</span>
      <p>Ce jeu n'est pas fait pour être joué sur mobile.</p>
    </div>
  </div>

  <div v-else id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/a-propos">A propos</router-link> |
      <router-link to="/instructions">Instructions</router-link> |
      <router-link to="/jouer">Jouer</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      estMobile: false
    };
  },
  methods: {
    detecterMobile() {
      if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.estMobile = this.detecterMobile();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
body {
  background: url("./assets/fond-site.webp");
  background-repeat: repeat;
}
#app {
  font-family: "Press Start 2P", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  width: 100%;
  margin-top: 4%;
  display: flex;
  justify-content: center;
}

#avertissement-mobile {
  height: 100vh;
  width: 100vw;
  display: flex;
  place-items: center;
}

.fond-blanc {
  background-color: white;
}
</style>
