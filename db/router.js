const router = require('express').Router();
const controller = require('./controller.js');

router.get('/rooms/roomID/:id/photos/', controller.getRoomById);
router.get('/rooms/roomName/:name/photos/', controller.getRoomByName);
router.post('/rooms/', controller.insertRoom);
router.post('/rooms/roomID/:id/photos/', controller.insertPhoto);
router.delete('/rooms/roomID/:id/', controller.deleteRoom);
router.put('/rooms/roomID/:id/', controller.changeRoomName);

router.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

router.use((err, req, res, next) => {
  console.error('THIS IS THE ERROR WE ARE CURRENTLY EXPERIENCING: ', err);
  res.status(500).send('BAD!');
});

module.exports = router;
