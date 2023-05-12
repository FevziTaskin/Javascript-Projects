import Store from "./store.js";
import View from "./view.js";

const players = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "turquoise",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "yellow",
  },
];

function init() {
  const view = new View();
  const store = new Store("live-t3-storage-key", players);

  // Current tab state changes
  /*  Thanks to this event listener , we were able to refactor our code 
  by avoiding redundant view.render(store.game,store.stats) commented statements below */
  store.addEventListener("statechange", () => {
    view.render(store.game, store.stats);
  });

  /* Instead of initView function, the code has been refactored with the render method 
  which is in view.js. initview is just for the reference */
  /* function initView() {
    view.closeAll();
    view.clearMoves();
    view.setTurnIndicator(store.game.currentPlayer); // => view.setIndicator(players[0])
    view.updateScoreboard(
      store.stats.playerWithStats[0].wins,
      store.stats.playerWithStats[1].wins,
      store.stats.ties
    );
    view.initializeMoves(store.game.moves);
  } */

  // Different tab state changes
  window.addEventListener("storage", () => {
    console.log("state changed from another tab");
    // initView();
    view.render(store.game, store.stats);
  });

  // initView();
  // The first load of the document
  view.render(store.game, store.stats);

  view.bindGameResetEvent((event) => {
    store.reset();
    // initView();
    // view.render(store.game, store.stats);  ==>redundant
  });

  view.bindNewRoundEvent((event) => {
    store.newRound();
    // initView();
    // view.render(store.game, store.stats);  ==>redundant
  });

  view.bindPlayerMoveEvent((square) => {
    const existingMove = store.game.moves.find(
      (move) => move.squareId === +square.id
    );

    if (existingMove) {
      return;
    }

    // Place an icon of the current player in a square
    // view.handlePlayerMove(square, store.game.currentPlayer);

    // Advance to the next state by pushing a move to the moves array
    store.playerMove(+square.id);

    // view.render(store.game, store.stats); ==> redundant

    /*  if (store.game.status.isComplete) {
      view.openModal(
        store.game.status.winner
          ? `${store.game.status.winner.name} wins!`
          : "Tie!"
      );

      return;
    } */

    // Set the next player's turn indicator
    //view.setTurnIndicator(store.game.currentPlayer);
  });
}

window.addEventListener("load", init);
