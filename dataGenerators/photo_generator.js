const fs = require('fs');
const faker = require('faker');

const PHOTO_URL = 'https://s3-us-west-1.amazonaws.com/hackerbnbphotos/file-';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const photos = (numofEntries) => {
  let csv = 'photo_id, photo_url, photo_description';
  for (let i = 9000001; i <= numofEntries; i++) {
    const photoId = i;
    const photoUrl = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
    const photoDescription = faker.lorem.sentence();
    csv = csv + `\n ${photoId}, ${photoUrl}, ${photoDescription}`;
  }
  return csv;
};

console.time('test');

fs.writeFile('../data/photos_10.csv', photos(10000000), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Success!')
});

console.time('test');
