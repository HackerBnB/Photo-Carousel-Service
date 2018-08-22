const siege = require('siege');

let stress = siege().on(3000).concurrent(10);

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

for (let i = 0; i < 50000; i++) {
  stress = stress.for(1).times.get(`/api/rooms/roomID/${getRandomIntInclusive(1, 10000000)}/photos`);
};

// for (let i = 0; i < 50000; i++) {
//   stress = stress.for(1).times.get(`/api/rooms/roomName/${'room' + getRandomIntInclusive(1, 10000000)}/photos`);
// };


stress.attack();