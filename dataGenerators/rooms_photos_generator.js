const fs = require('fs');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const dataGenerator = (n) => {
  for (let file = 1; file <= n; file++) {
    const roomPhotos = (numofEntries) => {
      let csv = 'roomId, photoId';
      for (let i = (file-1) * 5000000 + 1; i <= numofEntries; i++) {
        const id = i;
        const roomId = getRandomIntInclusive(1, 10000000);
        const photoId = getRandomIntInclusive(1, 10000000);
        csv = csv + `\n ${roomId}, ${photoId}`;
      }
      return csv;
    }
    fs.writeFile(`./data/rooms_photos_${file}.csv`, roomPhotos(5000000*file), 'utf-8', (err) => {
      if (err) throw err;
      console.log(`Success generating ${file*5000000} entries!`)
    });
  };
};

dataGenerator(10);
