const fs = require('fs');
const faker = require('faker');

const PHOTO_URL = 'https://s3-us-west-1.amazonaws.com/hackerbnbphotos/file-';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const rooms = (numofEntries) => {
  let csv = 'room_id, room_name, verified';
  for (let i = 1500001; i <= numofEntries; i++) {
    const roomId = i;
    const roomName = 'room' + i.toString();
    const verified = !Math.floor(Math.random() * 2);
    const photos = [];
    for (let j = 1; j <= getRandomIntInclusive(1, 10); j++) {
      let photo = {};
      photo[`${PHOTO_URL + getRandomIntInclusive(1, 75)}.jpg`] = faker.lorem.sentence();
      photos.push(photo);
    };
    //console.log(photos);
    csv = csv + `\n ${roomId}, ${roomName}, ${JSON.stringify(photos)}`;
  }
  return csv;
};

const dataGenerator = (n) => {
  for (let file = 1; file <= n; file++) {
    const rooms = (numofEntries) => {
      let csv = 'room_id, room_name, verified, photos';
      for (let i = 50000*(file - 1) + 1; i <= numofEntries; i++) {
        const roomId = i;
        const roomName = 'room' + i.toString();
        const verified = !Math.floor(Math.random() * 2);
        const photos = [];
        for (let j = 1; j <= getRandomIntInclusive(1, 10); j++) {
          let photo = {};
          photo[`${PHOTO_URL + getRandomIntInclusive(1, 75)}.jpg`] = faker.lorem.sentence();
          photos.push(photo);
        };
        //console.log(photos);
        csv = csv + `\n ${roomId}, ${roomName}, ${verified}, ${JSON.stringify(photos)}`;
      }
      return csv;
    };
    console.time('test');
    fs.writeFile(`../data/cassandra_${file}.csv`, rooms(file*50000), 'utf-8', (err) => {
      if (err) throw err;
      console.log(`Success writing ${file*50000} records`);
    });
    console.timeEnd('test');
  };
};

dataGenerator(20);





//
// const photos = (numofEntries) => {
//   let csv = 'photo_id, photo_url, photo_description';
//   for (let i = 1; i <= numofEntries; i++) {
//     const photoId = i;
//     const photoUrl = PHOTO_URL + getRandomIntInclusive(1, 75) + '.jpg';
//     const photoDescription = faker.lorem.sentence();
//     csv = csv + `\n ${photoId}, ${photoUrl}, ${photoDescription}`;
//   }
//   return csv;
// };
//
// fs.writeFile('data/sample_photos_1.csv', photos(100), 'utf-8', (err) => {
//   if (err) throw err;
//   console.log('Success!')
// });
