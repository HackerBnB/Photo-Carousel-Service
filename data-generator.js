const fs = require('fs');
const faker = require('faker');

const PHOTO_URL = 'https://s3-us-west-1.amazonaws.com/hackerbnbphotos/file-';

faker.seed(100);

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

let header = 'room_id, room_name, photo_url, description, verified';
console.log(header);

const photos = (numofEntries) => {
  for (let i = 1; i <= numofEntries; i++) {
    let room_id = i;
    let room_name = faker.lorem.word() + (i%10000).toString();
    let photo_url = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
    let description = faker.lorem.sentence();
    let verified = !Math.floor(Math.random() * 2);
    console.log(`\n ${room_id}, ${room_name}, ${photo_url}, ${description}, ${verified}`);
  }
  return true;
};

photos(1000000);

// console.log(photos(1000000));

// This just in from Fred about using file compression during the data generation step…
//
// Take console.log output from your data generation script and compress it before writing to the hd. (This requires you to use `console.log` or write to `STDOUT` instead of using `fs.writeFile`):
// `node generate_data.js | gzip -c > data.csv.gz`
// Decompress your data and send it to your db loader script (this requires you to read from `STDIN` instead of using `fs.readFile` to read directly from a file):
// `gunzip -c data.csv.gz | node load_db.js`
