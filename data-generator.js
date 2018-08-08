const fs = require('fs');
const faker = require('faker');

const PHOTO_URL = 'https://s3-us-west-1.amazonaws.com/hackerbnbphotos/file-';
const MAX_ID_RANGE = 100;
const MAX_IMG_RANGE = 10;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const photos = (numofEntries) => {
  let csv = 'room_id, photo_url, description, verified';
  for (let i = 1; i <= numofEntries; i++) {
    let room_id = i;
    let photo_url = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
    let description = faker.lorem.sentence();
    let verified = !Math.floor(Math.random() * 2);
    csv = csv + `\n ${room_id}, ${photo_url}, ${description}, ${verified}`;
  }
  return csv;
}

console.log(photos(100));

// fs.writeFile('data.csv', photos(100), 'utf-8', (err) => {
//   if (err) throw err;
//   console.log('Success!')
// })

// This just in from Fred about using file compression during the data generation step…
//
// Take console.log output from your data generation script and compress it before writing to the hd. (This requires you to use `console.log` or write to `STDOUT` instead of using `fs.writeFile`):
// `node generate_data.js | gzip -c > data.csv.gz`
// Decompress your data and send it to your db loader script (this requires you to read from `STDIN` instead of using `fs.readFile` to read directly from a file):
// `gunzip -c data.csv.gz | node load_db.js`
