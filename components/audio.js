{
  class Audio extends opr.Toolkit.Component {

    render() {
      return [
        'audio',
        {
          preload: 'none',
          onCanPlayThrough: this.props.onReady,
          src: 'audio/timer.mp3',
        },
      ];
    }
  }

  module.exports = Audio;
}