const express = require('express');
const app = express();
const port = 3001;
const ethTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tETHBTC'
};
const ticker = require('./ticker')(ethTicker);
app.listen(port, (err) => {
  console.log("App up and running on port: " + port);
});
