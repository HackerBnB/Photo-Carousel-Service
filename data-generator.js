const fs = require('fs');
const faker = require('faker');

const PHOTO_URL = 'https://s3-us-west-1.amazonaws.com/hackerbnbphotos/file-';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const rooms = (numofEntries) => {
  let csv = 'room_id, room_name, verified';
  for (let i = 1; i <= numofEntries; i++) {
    const roomId = i;
    const roomName = 'room' + i.toString();
    const verified = !Math.floor(Math.random() * 2);
    csv = csv + `\n ${roomId}, ${roomName}, ${verified}`;
  }
  return csv;
};

fs.writeFile('data/sample_rooms_1.csv', rooms(100), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Success!')
});


const photos = (numofEntries) => {
  let csv = 'photo_id, photo_url, photo_description';
  for (let i = 1; i <= numofEntries; i++) {
    const photoId = i;
    const photoUrl = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
    const photoDescription = faker.lorem.sentence();
    csv = csv + `\n ${photoId}, ${photoUrl}, ${photoDescription}`;
  }
  return csv;
};

fs.writeFile('data/sample_photos_1.csv', photos(100), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Success!')
});

const roomPhotos = (numofEntries) => {
  let csv = 'id, roomId, photoId';
  for (let i = 1; i <= numofEntries; i++) {
    const id = i;
    const roomId = getRandomIntInclusive(1, 100);
    const photoId = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
    csv = csv + `\n ${id}, ${roomId}, ${photoId}`;
  }
  return csv;
}

fs.writeFile('data/sample_rooms_photos_1.csv', roomPhotos(1000), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Success!')
});
