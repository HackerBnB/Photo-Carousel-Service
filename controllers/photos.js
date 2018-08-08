const db = require('../models');

module.exports = {
  get(req, res, next) {
    /*
      method: GET
      route: '/api/photos/:id'
    */
    const roomId = req.params.id;

    db.Photo.find({ room_id: roomId })
      .exec()
      .then((photos) => {
        if (!photos || !photos.length) {
          return next();
        }

        res.json({ results: photos });
      })
      .catch(next);
  },

  post(req, res) {
    /*
      method: POST
      route: '/api/photos/:id'
    */
    const newPhoto = new db.Photo();
    newPhoto.room_id = req.params.id;
    newPhoto.description = req.params.description;
    newPhoto.verified = req.params.verified;
    newPhoto.photo_url = req.params.photo_url;
    newPhoto.save((err, photo) => {
      if (err) {
        console.log('Error inserting photo!')
      }
      res.send('Successful posting photo!')
    })
  },

  put(req, res) {
    /*
      method: PUT
      route: '/api/photos/:id'
    */
    const roomId = req.params.id;
    db.Photo.updateOne({ room_id: roomId }, req.body, (err) => {
      if (err) return res.status(405).send(err);
      res.send('Success updating data!');
    })
  },

  delete(req, res) {
    /*
      method: DELETE
      route: '/api/photos/:id'
    */
    const roomId = req.params.id;
    db.Photo.deleteOne({ room_id: roomId }, (err) => {
      if (err) {
        console.log('Error deleting data!')
      }
      res.send('Success deleting data!');
    })
  },
};
