{
  const SHOW_MENU = Symbol('show-menu');
  const RETURN_TO_GAME = Symbol('return-to-game');

  const NEW_GAME = Symbol('new-game');

  const reducer = (state, command) => {
    switch (command.type) {
      case SHOW_MENU:
        return Object.assign({}, state, {
          view: null,
        });
      case RETURN_TO_GAME:
        return Object.assign({}, state, {
          view: 'game',
        });
      case NEW_GAME:
        return Object.assign({}, state, {
          view: 'game',
          game: {
            players: ['Asia', 'Kasia', 'Murzyn', 'Olo'],
            number: 1,
            round: 1,
            currentPlayer: 'Asia',
            timer: {
              value: 60,
              paused: true,
            },
          },
        });
      default:
        return state;
    }
  };

  reducer.commands = {
    showMenu: () => ({
      type: SHOW_MENU,
    }),
    returnToGame: () => ({
      type: RETURN_TO_GAME,
    }),
    newGame: () => ({
      type: NEW_GAME,
    }),
  };

  module.exports = reducer;
}
