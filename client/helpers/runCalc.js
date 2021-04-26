import * as turf from '@turf/turf';

const distanceBetween = (lastPos, currentPos) => {
  const from = turf.point([lastPos.coords.longitude, lastPos.coords.latitude]);
  const to = turf.point([currentPos.coords.longitude, currentPos.coords.latitude]);
  const options = {units: 'meters'};

  const distance = (Math.round(turf.distance(from, to, options))) / 1000;
  return distance;
};

const averagePace = (currDistance, from, to) => {
  if (from === to) {
    return 0;
  };
  const pace = ((to.timestamp - from.timestamp) / 1000 / 60) / (currDistance);
  if (pace === Infinity) return 0;
  return pace;
};

const timeBetween = (from, to) => {
  const secondsPassed = (to.timestamp - from.timestamp);
  return secondsPassed;
};

const elGain = (from, to) => {
  const gain = from.altitude - to.altitude;
  const res = gain > 0 ? gain : 0;
  return Math.floor(res);
};

const elLoss = (from, to) => {
  const gain = from.altitude - to.altitude;
  const res = gain < 0 ? gain : 0;
  return Math.abs(Math.floor(res));
};

module.exports = { distanceBetween, averagePace, timeBetween, elGain, elLoss };