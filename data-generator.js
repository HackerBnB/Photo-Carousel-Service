const fs = require('fs');
const faker = require('faker');

const PHOTO_URL = 'https://s3-us-west-1.amazonaws.com/hackerbnbphotos/file-';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const photos = (numofEntries) => {
  let csv = 'room_id, room_name, photo_url, description, verified';
  for (let i = 1; i <= numofEntries; i++) {
    let room_id = i;
    let room_name = 'room' + i.toString();
    let photo_url = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
    let description = faker.lorem.sentence();
    let verified = !Math.floor(Math.random() * 2);
    csv = csv + `\n ${room_id}, ${room_name}, ${photo_url}, ${description}, ${verified}`;
  }
  return csv;
}

fs.writeFile('data/sample.csv', photos(100), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Success!')
})
