const ws = require('ws');
const w = new ws('wss://api.bitfinex.com/ws/2');

const ticker = function(ethTicker,http){
  const io = require('socket.io')(http);
  w.on('message', (msg) => {
    res = JSON.parse(msg)
      if(res[1] !=='hb' && res[1]){
          io.emit("tickerEth",res[1]);
       }
  });
  let req = JSON.stringify(ethTicker);
  w.on('open', () => w.send(req));
  return ticker;
}
module.exports = ticker;
