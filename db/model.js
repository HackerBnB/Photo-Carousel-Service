const connection = require('./connection.js');

const getRoomById = (roomId, cb) => {
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
  const queryStr = `select * from photos inner join rooms on rooms.room_id = photos.room_id WHERE rooms.room_name = '${roomName}';`;
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
    cb(results);
  });
};

const changeRoomName = (roomID, roomName, cb) => {
  const queryStr = `UPDATE rooms SET room_name = ${roomName} WHERE room_id = ${roomID};`;
  connection.query(queryStr, (results) => {
    cb(results);
  });
};

const deleteRoom = (roomID, cb) => {
  const queryStr = `DELETE FROM rooms WHERE room_id = ${roomID};`;
  connection.query(queryStr, (results) => {
    cb(results);
  });
};

module.exports = {
  getRoomById,
  getRoomByName,
  insertRoom,
  insertPhoto,
  deleteRoom,
  changeRoomName,
};
