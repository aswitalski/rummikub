{
  class TaskScheduler {

    static runTimer(from, callback) {
      let value = from;
      const taskId = setInterval(() => {
        callback(--value);
        if (value === 0) {
          this.cancelTimer(taskId);
        }
      }, 1000);
      return taskId;
    }

    static cancelTimer(taskId) {
      clearInterval(taskId);
    }
  }

  module.exports = TaskScheduler;
}