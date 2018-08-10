const fs = require('fs');

const rooms = (numofEntries) => {
  let csv = 'room_id, room_name, verified';
  for (let i = 5000001; i <= numofEntries; i++) {
    const roomId = i;
    const roomName = 'room' + i.toString();
    const verified = !Math.floor(Math.random() * 2);
    csv = csv + `\n ${roomId}, ${roomName}, ${verified}`;
  }
  return csv;
};

console.time('test');

fs.writeFile('../data/rooms_2.csv', rooms(10000000), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Success!')
});

console.timeEnd('test');
