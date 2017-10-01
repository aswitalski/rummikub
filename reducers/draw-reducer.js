{
  const DRAW = Symbol('draw');

  const reducer = (state, command) => {
    switch (command.type) {
      case DRAW:
        return state;
      default:
        return state;
    }
  };

  reducer.commands = {
    draw: () => ({
      type: DRAW,
    }),
  };

  module.exports = reducer;
}
