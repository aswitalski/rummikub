{
  class Menu extends opr.Toolkit.Component {

    newGame() {
      this.commands.newGame();
    }

    returnToGame() {
      this.commands.returnToGame();
    }

    render() {
      return [
        'div',
        {
          class: 'menu',
        },
        [
          'div',
          {
            class: 'menu-item',
            onClick: this.returnToGame,
            style: {
              display: this.props.game ? '' : 'none',
            },
          },
          'Powrót do gry',
        ],
        [
          'div',
          {
            class: 'menu-item',
            onClick: this.newGame,
            style: {
              display: this.props.game ? 'none' : '',
            }
          },
          'Nowa gra',
        ],
        [
          'div',
          {
            class: 'menu-item',
          },
          'Liga',
        ],
        [
          'div',
          {
            class: 'menu-item',
          },
          'Statystyki',
        ],
        [
          'div',
          {
            class: 'menu-item',
          },
          'Ustawienia',
        ],
      ];
    }
  }

  module.exports = Menu;
}