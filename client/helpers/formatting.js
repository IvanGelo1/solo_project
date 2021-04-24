
const timeFormat = (duration) => {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
};

const avgPaceFormat = (avgPace) => {
  const minutes = Math.floor(avgPace);
  const decimalSec = avgPace - Math.floor(avgPace);
  let seconds = Math.floor(60 * decimalSec);
  seconds = (seconds < 10 ) ? '0' + seconds : seconds;

  return minutes + ':' + seconds;
}

module.exports = { timeFormat, avgPaceFormat };