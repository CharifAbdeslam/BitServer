const app = require('express')();
const http = require('http').Server(app);
const ws = require('ws');
const io = require('socket.io')(http);
const w = new ws('wss://api.bitfinex.com/ws/2');
/*tXRPBTC,tLTCBTC,tXMRBTC,tETCBTC,tIOTBTC,tDSHBTC,tNEOBTC,tZECBTC,tEOSBTC,tOMGBTC*/
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
};
const xrpTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tXRPBTC'
};
const ltcTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tLTCBTC'
};
const xmrTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tXMRBTC'
};
const etcTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tETCBTC'
};
const iotTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tIOTBTC'
};
const dshTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tDSHBTC'
};
const neoTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tNEOBTC'
};
const zecTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tZECBTC'
};
const eosTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tEOSBTC'
};
const omgTicker = {
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tOMGBTC'
};
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
      io.emit("channelID",chanId);
      if(respanse[1] !== "hb"){
        io.emit("ticker",respanse);
      }
    });
let eth= JSON.stringify(ethTicker);
let bch= JSON.stringify(bchTicker);
let xrp= JSON.stringify(xrpTicker);
let ltc= JSON.stringify(ltcTicker);
let xmr= JSON.stringify(xmrTicker);
let etc= JSON.stringify(etcTicker);
let iot= JSON.stringify(iotTicker);
let dsh= JSON.stringify(dshTicker);
let neo= JSON.stringify(neoTicker);
let zec= JSON.stringify(zecTicker);
let eos= JSON.stringify(eosTicker);
let omg= JSON.stringify(omgTicker);
w.on('open', () =>{
  w.send(eth);
  w.send(bch);
  w.send(xrp);
  w.send(ltc);
  w.send(xmr);
  w.send(etc);
  w.send(iot);
  w.send(dsh);
  w.send(neo);
  w.send(zec);
  w.send(eos);
  w.send(omg);
});

http.listen(3001, (err) => {
  console.log("App up and running on port: 3001");
});
io.on("connect",function(){
  console.log("User connected");
})
