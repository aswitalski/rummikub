{
  class GameHeader extends opr.Toolkit.Component {

    endGame() {
      this.commands.endGame();
    }

    isPossibleToEndGame() {
      return this.props.timer.paused;
    }

    render() {
      return [
        'div',
        {
          class: 'game-header',
        },
        [
          'span',
          {
            class: 'competition',
          },
          `Gra ${this.props.number}`,
        ],
        [
          'span',
          {
            class: 'round',
          },
          `( Runda ${this.props.round} )`,
        ],
        [
          'button',
          {
            class: 'trophy',
            onClick: this.endGame,
            style: {
              display: this.isPossibleToEndGame() ? '' : 'none',
            },
          },
        ],
        ...this.children,
      ];
    }
  }

  module.exports = GameHeader;
}
