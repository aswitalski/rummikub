{
  let scheduler;

  const Timer = loader.symbol('components/timer');

  class Game extends opr.Toolkit.Component {

    render() {
      return [
        'div',
        {
          class: 'game',
        },
        [
          'div',
          {
            class: 'player-name',
          },
          this.props.currentPlayer,
        ],
        [
          Timer,
          this.props.timer,
        ],
      ];
    }
  }

  module.exports = Game;
}