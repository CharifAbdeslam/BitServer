const express = require('express');
const app = express();
const http = require('http').Server(app);
const ws = require('ws');
const io = require('socket.io')(http);
const w = new ws('wss://api.bitfinex.com/ws/2');

app.use(express.static("public"))
app.get('/', function(req, res){
  res.send('index');
});
app.get("/exchange",function(req,res){
  res.send("you are in the exchange here");
})
let tickerChanell={};
function Payload(channel,symbol){
  this.event = 'subscribe';
  this.channel = channel;
  this.symbol = symbol;
};
const ethTicker = new Payload('ticker','tETHBTC');
const bchTicker = new Payload('ticker','tBCHBTC');
const xrpTicker = new Payload('ticker','tXRPBTC');
const ltcTicker = new Payload('ticker','tLTCBTC');
const xmrTicker = new Payload('ticker','tXMRBTC');
const etcTicker = new Payload('ticker','tETCBTC');
const iotTicker = new Payload('ticker','tIOTBTC');
const dshTicker = new Payload('ticker','tDSHBTC');
const neoTicker = new Payload('ticker','tNEOBTC');
const zecTicker = new Payload('ticker','tZECBTC');
const eosTicker = new Payload('ticker','tEOSBTC');
const omgTicker = new Payload('ticker','tOMGBTC');
const xvgTicker = new Payload('ticker','tXVGBTC');
const gntTicker = new Payload('ticker','tGNTBTC');
const qtmTicker = new Payload('ticker','tQTMBTC');
  w.on('message', (msg) => {
      respanse = JSON.parse(msg)
      if(respanse.pair === 'ETHBTC'){
        tickerChanell = Object.assign({},tickerChanell,{eth:respanse});
      }
      if(respanse.pair === 'BCHBTC'){
        tickerChanell = Object.assign({},tickerChanell,{bch:respanse});
      }
      if(respanse.pair === 'XRPBTC'){
        tickerChanell = Object.assign({},tickerChanell,{xrp:respanse});
      }
      if(respanse.pair === 'LTCBTC'){
        tickerChanell = Object.assign({},tickerChanell,{ltc:respanse});
      }
      if(respanse.pair === 'XMRBTC'){
        tickerChanell = Object.assign({},tickerChanell,{xmr:respanse});
      }
      if(respanse.pair === 'ETCBTC'){
        tickerChanell = Object.assign({},tickerChanell,{etc:respanse});
      }
      if(respanse.pair === 'IOTBTC'){
        tickerChanell = Object.assign({},tickerChanell,{iot:respanse});
      }
      if(respanse.pair === 'DSHBTC'){
        tickerChanell = Object.assign({},tickerChanell,{dsh:respanse});
      }
      if(respanse.pair === 'NEOBTC'){
        tickerChanell = Object.assign({},tickerChanell,{neo:respanse});
      }
      if(respanse.pair === 'ZECBTC'){
        tickerChanell = Object.assign({},tickerChanell,{zec:respanse});
      }
      if(respanse.pair === 'EOSBTC'){
        tickerChanell = Object.assign({},tickerChanell,{eos:respanse});
      }
      if(respanse.pair === 'OMGBTC'){
        tickerChanell = Object.assign({},tickerChanell,{omg:respanse});
      }
      if(respanse.pair === 'XVGBTC'){
        tickerChanell = Object.assign({},tickerChanell,{xvg:respanse});
      }
      if(respanse.pair === 'GNTBTC'){
        tickerChanell = Object.assign({},tickerChanell,{gnt:respanse});
      }
      if(respanse.pair === 'QTMBTC'){
        tickerChanell = Object.assign({},tickerChanell,{qtm:respanse});
      }
      io.emit("tickerChanell",tickerChanell);
      if(respanse[1] !== "hb"){
        io.emit("ticker",respanse);
      }
    });

w.on('open', () =>{
  w.send(JSON.stringify(ethTicker));
  w.send(JSON.stringify(bchTicker));
  w.send(JSON.stringify(xrpTicker));
  w.send(JSON.stringify(ltcTicker));
  w.send(JSON.stringify(xmrTicker));
  w.send(JSON.stringify(etcTicker));
  w.send(JSON.stringify(iotTicker));
  w.send(JSON.stringify(dshTicker));
  w.send(JSON.stringify(neoTicker));
  w.send(JSON.stringify(zecTicker));
  w.send(JSON.stringify(eosTicker));
  w.send(JSON.stringify(omgTicker));
  w.send(JSON.stringify(xvgTicker));
  w.send(JSON.stringify(gntTicker));
  w.send(JSON.stringify(qtmTicker));
});

http.listen(3001, (err) => {
  console.log("App up and running on port: 3001");
});
io.on("connect",function(){
  console.log("User connected");
})
