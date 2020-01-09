const { events, Job } = require('@brigadecore/brigadier');

events.on('push', () => {
  var job = new Job('do-nothing', 'alpine');
  job.tasks = ['echo Hello', 'echo World'];

  job.run();
});
