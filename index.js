const app = require('express')();
const http = require('http').Server(app);
const ws = require('ws');
const io = require('socket.io')(http);
const w = new ws('wss://api.bitfinex.com/ws/2');
let chanId={}
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
  w.on('message', (msg) => {
      respanse = JSON.parse(msg)
      if(respanse.pair === 'ETHBTC'){
        chanId = Object.assign({},chanId,{eth:respanse});
      }
      if(respanse.pair === 'BCHBTC'){
        chanId = Object.assign({},chanId,{bch:respanse});
      }
      io.emit("channelID",chanId);
      if(respanse[1] !== "hb"){
        io.emit("ticker",respanse);
      }
    });
let eth = JSON.stringify(ethTicker);
let bch= JSON.stringify(bchTicker);
w.on('open', () => w.send(eth));
w.on('open', () => w.send(bch));

http.listen(3001, (err) => {
  console.log("App up and running on port: 3001");
});
io.on("connect",function(){
  console.log("User connected");
})
