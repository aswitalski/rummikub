{
  const START_TIMER = Symbol('start-timer');
  const PAUSE_TIMER = Symbol('pause-timer');
  const RESET_TIMER = Symbol('reset-timer');
  const SET_TIMER_VALUE = Symbol('set-timer-value');

  const PREVIOUS_PLAYER = Symbol('previous-player');
  const NEXT_PLAYER = Symbol('next-player');

  const END_GAME = Symbol('end-game');

  const updateGame = (state, overrides) => {
    return Object.assign({}, state, {
      game: Object.assign({}, state.game, overrides),
    });
  };

  const updateTimer = (state, timerOverrides) => {
    return updateGame(state, {
      timer: Object.assign({}, state.game.timer, timerOverrides),
    });
  };

  const previousPlayer = state => {
    const playerIndex = state.game.players.indexOf(state.game.currentPlayer);
    if (state.game.round === 1 && playerIndex === 0) {
      return state;
    }
    if (playerIndex === 0) {
      return updateGame(state, {
        round: state.game.round - 1,
        currentPlayer: state.game.players[state.game.players.length - 1],
      });
    }
    return updateGame(state, {
      currentPlayer: state.game.players[playerIndex - 1],
    });
  };

  const nextPlayer = state => {
    const playerIndex = state.game.players.indexOf(state.game.currentPlayer);
    if (playerIndex === state.game.players.length - 1) {
      return updateGame(state, {
        round: state.game.round + 1,
        currentPlayer: state.game.players[0],
      });
    }
    return updateGame(state, {
      currentPlayer: state.game.players[playerIndex + 1],
    });
  };

  const endGame = state => state;

  const reducer = (state, command) => {
    switch (command.type) {
      case SET_TIMER_VALUE:
        return updateTimer(state, {value: command.value});
      case START_TIMER:
        return updateTimer(state, {paused: false, taskId: command.taskId});
      case PAUSE_TIMER:
        return updateTimer(state, {paused: true});
      case RESET_TIMER:
        return updateTimer(state, {paused: true, value: 60});
      case PREVIOUS_PLAYER:
        return previousPlayer(state);
      case NEXT_PLAYER:
        return nextPlayer(state);
      case END_GAME:
        return endGame(state);
      default:
        return state;
    }
  };

  reducer.commands = {
    startTimer: taskId => ({
      type: START_TIMER,
      taskId,
    }),
    pauseTimer: value => ({
      type: PAUSE_TIMER,
    }),
    resetTimer: () => ({
      type: RESET_TIMER,
    }),
    setTimerValue: value => ({
      type: SET_TIMER_VALUE,
      value,
    }),
    previousPlayer: () => ({
      type: PREVIOUS_PLAYER,
    }),
    nextPlayer: () => ({
      type: NEXT_PLAYER,
    }),
    endGame: () => ({
      type: END_GAME,
    })
  };

  module.exports = reducer;
}
