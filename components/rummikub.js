{
  let menuReducer;
  let drawReducer;
  let gameReducer;
  let statsReducer;

  let storage;

  const Menu = loader.symbol('components/menu/');
  const MenuHeader = loader.symbol('components/menu/header');
  const MenuFooter = loader.symbol('components/menu/footer');

  const Game = loader.symbol('components/game/');
  const GameHeader = loader.symbol('components/game/header');
  const GameFooter = loader.symbol('components/game/footer');

  const Draw = loader.symbol('components/draw');
  const Stats = loader.symbol('components/stats');

  const Rummikub = class extends opr.Toolkit.Root {

    static async init() {
      menuReducer = await loader.require('reducers/menu-reducer');
      drawReducer = await loader.require('reducers/draw-reducer');
      gameReducer = await loader.require('reducers/game-reducer');
      statsReducer = await loader.require('reducers/stats-reducer');
      storage = await loader.require('services/storage');
    }

    async getInitialState() {
      return {};
    }

    getReducers() {
      return [menuReducer, drawReducer, gameReducer, statsReducer];
    }

    getHeader() {
      const backButton = [
        'button',
        {
          class: 'back-button',
          onClick: () => this.commands.showMenu(),
        },
      ];

      switch (this.props.view) {
        case 'game':
          return [
            GameHeader,
            this.props.game,
            backButton,
          ];
        default:
          return [
            MenuHeader,
            this.props,
          ];
      }
    }

    getContent() {
      switch (this.props.view) {
        case 'game':
          return [
            Game,
            this.props.game,
          ];
        case 'draw':
          return [
            Draw,
            this.props,
          ];
        case 'stats':
          return [
            Stats,
            this.props,
          ];
        default:
          return [
            Menu,
            this.props,
          ];
      }
    }

    getFooter() {
      switch (this.props.view) {
        case 'game':
          return [
            GameFooter,
            this.props.game,
          ];
        default:
          return [
            MenuFooter,
            this.props,
          ];
      }
    }
    render() {
      return [
        'div',
        {
          class: 'rummikub',
        },
        [
          'div',
          {
            class: 'header',
          },
          this.getHeader(),
        ],
        [
          'div',
          {
            class: 'content',
          },
          this.getContent(),
        ],
        [
          'div',
          {
            class: 'footer',
          },
          this.getFooter(),
        ],
      ];
    }
  };

  module.exports = Rummikub;
}
