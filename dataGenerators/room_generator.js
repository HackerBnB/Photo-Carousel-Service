const fs = require('fs');

const dataGenerator = (n) => {
  for (let file = 2; file <= n; file++) {
    const rooms = (num) => {
      let csv = 'room_name, verified';
      for (let i = (file-1)*5000000+1; i <= num; i++) {
        //const roomId = i;
        const roomName = 'room' + i.toString();
        const verified = !Math.floor(Math.random() * 2);
        csv = csv + `\n ${roomName}, ${verified}`;
      }
      return csv;
    };
    fs.writeFile(`./data/rooms_${file}.csv`, rooms(5000000*file), 'utf-8', (err) => {
      if (err) throw err;
      console.log(`Success writing ${5000000*file} entries!`)
    });
  }
};

dataGenerator(2);
