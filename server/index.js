require('newrelic');
const app = require('./app2');

app.listen(app.get('port'), () =>
  console.log(`listening on port ${app.get('port')}!`)
);
