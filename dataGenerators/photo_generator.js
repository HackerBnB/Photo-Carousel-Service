const fs = require('fs');
const faker = require('faker');

const PHOTO_URL = 'https://s3-us-west-1.amazonaws.com/hackerbnbphotos/file-';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const dataGenerator = (n) => {
  for (let file = 11; file <= n; file++) {
    const photos = (numofEntries) => {
      let csv = 'roomId, photo_url, photo_description';
      for (let i = (file - 1) * 5000000 + 1; i <= numofEntries; i++) {
        const roomId = getRandomIntInclusive(1, 10000000);
        const photoUrl = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
        //const photoUrl = getRandomIntInclusive(1, 75).toString();
        const photoDescription = faker.lorem.sentence();
        csv = csv + `\n ${roomId}, ${photoUrl}, ${photoDescription}`;
      }
      return csv;
    };
    fs.writeFile(`./data/photos_${file}.csv`, photos(5000000*file), 'utf-8', (err) => {
      if (err) throw err;
      console.log(`Success writing ${file * 5000000} entries!`)
    });
  }
};

dataGenerator(11);
