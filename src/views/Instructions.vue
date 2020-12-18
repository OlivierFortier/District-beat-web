<template>
  <main>
    <div class="nes-container is-rounded is-dark">
      <h1>Instructions</h1>
      <h2>But du jeu <i class="nes-icon trophy is-large"></i></h2>
      <p>
        Vous devez survivre et vous battre à travers des hordes d'ennemis de
        quartier en quartier, afin d'arriver à la fin ou se situe le concert.
      </p>
      <h2>Précision <i class="snes-logo"></i></h2>
      <p>
        Vous devez confirmer votre choix de personnage avant de commencer la
        partie
      </p>
      <h2>Contrôles <i class="snes-logo"></i></h2>
      <p>
        Contrôles pour manettes sans guillemets, contrôles pour clavier avec
        guillemets
      </p>
      <div class="nes-table-responsive table">
        <table class="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>
                <button type="button" class="nes-btn is-success">
                  A / "R"
                </button>
              </th>
              <th>
                <button type="button" class="nes-btn is-error">B / "F"</button>
              </th>
              <th>
                <button type="button" class="nes-btn is-primary">
                  X / "SPACE"
                </button>
              </th>
              <th>
                <button type="button" class="nes-btn is-warning">
                  Y / "G"
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interragir</td>
              <td>Roulade</td>
              <td>Attaquer</td>
              <td>Changer d'arme / Lancer</td>
            </tr>
          </tbody>
        </table>
        <table class="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>
                <button type="button" class="nes-btn">Joystick / "WASD"</button>
              </th>
              <th>
                <button type="button" class="nes-btn">L / R / "WASD"</button>
              </th>
              <th>
                <button type="button" class="nes-btn">START / "R"</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bouger</td>
              <td>Choisir personnage</td>
              <td>Confirmer choix / prêt</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="nes-container is-rounded is-dark">
        <h6>ps : pour activer le mode de triche.... appuyez sur LB sur la manettre, ou la touche L sur le clavier... shhhh</h6>
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
