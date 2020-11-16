<template>
  <section class="nes-container is-dark conteneur">
    <section class="message-list">
      <section class="message -left">
        <i class="nes-bcrikko"></i>
        <!-- Balloon -->
        <div class="nes-balloon from-left is-dark bulle-texte">
          <p>Salut, t'as envie d'aller aux arcades ?</p>
        </div>
      </section>

      <section class="message -right">
        <!-- Balloon -->
        <div class="nes-balloon from-right is-dark bulle-texte">
          <p>
            Oui ! Il y a un nouveau jeu nommé "District-Beat" qui est super !
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
</style>
