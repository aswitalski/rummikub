{
  const STATS = Symbol('stats');

  const reducer = (state, command) => {
    switch (command.type) {
      case STATS:
        return state;
      default:
        return state;
    }
  };

  reducer.commands = {
    stats: () => ({
      type: STATS,
    }),
  };

  module.exports = reducer;
}
