{
  let scheduler;

  const Audio = loader.symbol('components/audio');

  class Timer extends opr.Toolkit.Component {

    static async init() {
      scheduler = await loader.require('services/scheduler');
    }

    getAudio() {
      return this.ref.querySelector('audio');
    }

    onAudioReady() {
      const audio = this.getAudio();
      if (!audio.initialized) {
        this.startTimer();
      }
      audio.initialized = true;
    }

    startTimer(manual = false) {
      const audio = this.getAudio();
      audio.currentTime = 60 - this.props.value;
      const taskId = scheduler.runTimer(this.props.value, value => {
        this.commands.setTimerValue(value);
      });
      this.commands.startTimer(taskId);
    }

    play() {
      const audio = this.getAudio();
      audio.play();
      if (audio.initialized) {
        this.startTimer(true);
      }
    }

    pause() {
      const audio = this.getAudio();
      audio.currentTime = 60 - this.props.value;
      audio.pause();
      scheduler.cancelTimer(this.props.taskId);
      this.commands.pauseTimer();
    }

    onClick() {
      if (this.props.value === 0) {
        return;
      }
      if (this.props.paused) {
        this.play();
      } else {
        this.pause();
      }
    }

    render() {
      return [
        'div',
        {
          class: [
            'timer',
            {
              'warning': this.props.value <= 10 && this.props.value >= 1,
              'time-out': this.props.value === 0,
            },
          ],
          metadata: {
            pause: this.pause,
            play: this.play,
          },
        },
        [
          'span',
          {
            class: 'value',
            onClick: this.onClick,
          },
          String(this.props.value),
        ],
        [
          'div',
          {
            class: 'paused',
            style: {
              visibility: this.props.paused ? '' : 'hidden',
            },
          },
          '( pauza )',
        ],
        [
          Audio,
          {
            onReady: this.onAudioReady,
          },
        ],
      ];
    }
  }

  module.exports = Timer;
}