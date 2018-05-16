const ws = require('ws');
const w = new ws('wss://api.bitfinex.com/ws/2');

const ticker = function(ethTicker){
  w.on('message', (msg) => {
    res = JSON.parse(msg)
      if(res[1] !=='hb' && res[1]){
          console.log(res[1]);
    }
  });
  let req = JSON.stringify(ethTicker);
  w.on('open', () => w.send(req));
  return ticker;
}
module.exports = ticker;
