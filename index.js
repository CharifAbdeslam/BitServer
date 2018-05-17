const app = require('express')();
const http = require('http').Server(app);
const ws = require('ws');
const io = require('socket.io')(http);
const w = new ws('wss://api.bitfinex.com/ws/2');

const ethTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tETHBTC'
};
const bchTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tBCHBTC'
}
const tickerEthIoEmit = "tickerEth";
const tickerBchIoEmit = "tickerBch";
require('./ticker')(ethTicker,http,io,w,tickerEthIoEmit);
require('./ticker')(bchTicker,http,io,w,tickerBchIoEmit);





http.listen(3001, (err) => {
  console.log("App up and running on port: 3001");
});
io.on("connect",function(){
  console.log("User connected");
})
