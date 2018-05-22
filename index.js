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
let chanId={};
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
        chanId = Object.assign({},chanId,{eth:respanse});
      }
      if(respanse.pair === 'BCHBTC'){
        chanId = Object.assign({},chanId,{bch:respanse});
      }
      if(respanse.pair === 'XRPBTC'){
        chanId = Object.assign({},chanId,{xrp:respanse});
      }
      if(respanse.pair === 'LTCBTC'){
        chanId = Object.assign({},chanId,{ltc:respanse});
      }
      if(respanse.pair === 'XMRBTC'){
        chanId = Object.assign({},chanId,{xmr:respanse});
      }
      if(respanse.pair === 'ETCBTC'){
        chanId = Object.assign({},chanId,{etc:respanse});
      }
      if(respanse.pair === 'IOTBTC'){
        chanId = Object.assign({},chanId,{iot:respanse});
      }
      if(respanse.pair === 'DSHBTC'){
        chanId = Object.assign({},chanId,{dsh:respanse});
      }
      if(respanse.pair === 'NEOBTC'){
        chanId = Object.assign({},chanId,{neo:respanse});
      }
      if(respanse.pair === 'ZECBTC'){
        chanId = Object.assign({},chanId,{zec:respanse});
      }
      if(respanse.pair === 'EOSBTC'){
        chanId = Object.assign({},chanId,{eos:respanse});
      }
      if(respanse.pair === 'OMGBTC'){
        chanId = Object.assign({},chanId,{omg:respanse});
      }
      if(respanse.pair === 'XVGBTC'){
        chanId = Object.assign({},chanId,{xvg:respanse});
      }
      if(respanse.pair === 'GNTBTC'){
        chanId = Object.assign({},chanId,{gnt:respanse});
      }
      if(respanse.pair === 'QTMBTC'){
        chanId = Object.assign({},chanId,{qtm:respanse});
      }
      io.emit("channelID",chanId);
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
