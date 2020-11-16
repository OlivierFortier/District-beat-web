<template>
  <section class="nes-container is-dark conteneur">
    <section class="message-list">
      <section class="message-left message-gauche">
        <i class="nes-bcrikko"></i>
        <!-- Balloon -->
        <div class="nes-balloon from-left is-dark bulle-texte">
          <p>Salut, t'as envie d'aller jouer à District Beat ?</p>
        </div>
      </section>

      <section class="message-right message-droite">
        <!-- Balloon -->
        <div class="nes-balloon from-right is-dark bulle-texte">
          <p>
            Oooohhh yeah !!!
          </p>
        </div>
        <i class="nes-bcrikko"></i>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "Introduction"
};
</script>

<style lang="scss">
.bulle-texte {
  width: 60%;
}
.message-droite, .message-gauche {
  display: flex;
}
.message-droite {
  justify-content: flex-end;
}
.message-gauche {
  justify-content: flex-start;
}
</style>
