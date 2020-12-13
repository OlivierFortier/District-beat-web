<template>
  <main>
    <div class="nes-container is-rounded is-dark">
      <h1>Instructions</h1>
      <h2>But du jeu <i class="nes-icon trophy is-large"></i></h2>
      <p>
        Vous devez survivre et vous battre à travers des hordes d'ennemis de
        quartier en quartier, afin d'arriver à la fin ou se situe le concert.
      </p>
      <h2>Contrôles <i class="snes-logo"></i></h2>
      <div class="nes-table-responsive table">
        <table class="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>
                <button type="button" class="nes-btn is-success">A</button>
              </th>
              <th><button type="button" class="nes-btn is-error">B</button></th>
              <th>
                <button type="button" class="nes-btn is-primary">X</button>
              </th>
              <th>
                <button type="button" class="nes-btn is-warning">Y</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interragir</td>
              <td>Roulade</td>
              <td>Attaquer</td>
              <td>Changer d'arme</td>
            </tr>
          </tbody>
        </table>
        <table class="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>
                <button type="button" class="nes-btn">L</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bouger</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 80%;
  margin-top: 5%;
}

.table {
  color: black;
}
</style>
