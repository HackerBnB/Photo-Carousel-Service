const fs = require('fs');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const roomPhotos = (numofEntries) => {
  let csv = 'id, roomId, photoId';
  for (let i = 45000001; i <= numofEntries; i++) {
    const id = i;
    const roomId = getRandomIntInclusive(1, 100);
    const photoId = getRandomIntInclusive(1, 100);
    csv = csv + `\n ${id}, ${roomId}, ${photoId}`;
  }
  return csv;
}

console.time('test');

fs.writeFile('./data/rooms_photos_10.csv', roomPhotos(50000000), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Success!')
});

console.timeEnd('test');
