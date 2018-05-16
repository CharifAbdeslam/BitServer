const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ethTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tETHBTC'
};
const ticker = require('./ticker')(ethTicker,http);
http.listen(3001, (err) => {
  console.log("App up and running on port: 3001");
});
io.on("connect",function(){
  console.log("User connected");
})
