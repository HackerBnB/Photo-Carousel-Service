const connection = require('./connection.js');

const getRoomById = (roomId, cb) => {
  console.log('Hey this is the room id that I received', roomId);
  const queryStr = `SELECT * FROM photos WHERE room_id = ${roomId};`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('Error retrieving data!', err);
      return;
    }
    cb(results);
  });
};

const getRoomByName = (roomName, cb) => {
  console.log('Hey this is the roomName that I received', roomName);
  const queryStr = `select * from photos inner join rooms on rooms.room_id = photos.room_id WHERE rooms.room_name = ${roomName};`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('Error retrieving data: ', err);
      return;
    }
    cb(results);
  });
};

const insertRoom = (roomName, verified, cb) => {
  const queryStr = `INSERT INTO rooms (room_name, verified) VALUES (${roomName}, ${verified});`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('Error inserting data: ', err);
      return;
    }
    cb(results);
  });
};

const insertPhoto = (roomID, photoUrl, photoDescription, cb) => {
  const queryStr = `INSERT INTO photos (room_id, photo_url, photo_description) VALUES (${roomID}, ${photoUrl}, ${photoDescription});`;
  connection.query(queryStr, (results) => {
    // if (err) {
    //   console.log('Error inserting data: ', err);
    //   return;
    // }
    cb(results);
  });
};

module.exports = {
  getRoomById,
  getRoomByName,
  insertRoom,
  insertPhoto,
};
