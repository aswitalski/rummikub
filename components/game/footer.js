{
  class GameFooter extends opr.Toolkit.Component {

    startTimer() {
      document.querySelector('.timer').play();
    }

    pauseTimer() {
      document.querySelector('.timer').pause();
    }

    previousPlayer() {
      this.resetTimer();
      this.commands.previousPlayer();
    }

    resetTimer() {
      const paused = this.props.timer.paused;
      this.pauseTimer();
      this.commands.resetTimer();
      if (!paused) {
        this.startTimer();
      }
    }

    nextPlayer() {
      this.resetTimer();
      this.commands.nextPlayer();
    }

    render() {
      return [
        'div',
        {
          class: 'controls',
        },
        [
          'button',
          {
            class: 'previous-player',
            onClick: this.previousPlayer,
          },
        ],
        [
          'button',
          {
            class: 'reload',
            onClick: this.resetTimer,
          },
        ],
        [
          'button',
          {
            class: 'next-player',
            onClick: this.nextPlayer,
          },
        ],
      ];
    }
  }

  module.exports = GameFooter;
}
