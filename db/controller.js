const model = require('./model.js');

getRoomById = (req, res) => {
  const id = req.params.id;
  if (parseInt(id, 10)) {
    console.log('Hey I got here by the magic of roomId');
    model.getRoomById(id, results => res.send(results));
  } else {
    res.end();
  }
};

getRoomByName = (req, res) => {
  const name = req.params.name;
  if (name) {
    model.getRoomByName(name, results => res.send(results));
  } else {
    res.end();
  }
};

insertRoom = (req, res) => {
  model.insertRoom(req.query.roomName, req.query.verified, (err, results) => {
    if (err) {
      console.log('Error inserting data!', err);
      return;
    }; 
    res.send(results); 
  });
};

insertPhoto = (req, res) => {
  model.insertPhoto(req.params.id, req.query.photoUrl, req.query.photoDescription, (err, results) => {
    if (err) {
      console.log('Error inserting data!', err);
      return;
    }; 
    res.send(results); 
  });
};

changeRoomName = (req, res) => {
  model.changeRoomName(req.params.id, req.query.roomName, (err, results) => {
    if (err) {
      console.log('Error! ', err);
      return;
    };
    res.send(results);
  });
};

deleteRoom = (req, res) => {
  model.deleteRoom(req.params.id, (err, results) => {
    if (err) {
      console.log('Error inserting data!', err);
      return;
    }; 
    res.send(results); 
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