var PS = require('./prisoner');
var dilemma = require('dilemma');

dilemma('purescript', {
  server : 'rtchub'
}, function(results, callback) {
  var opponentPrevious = results.opponent[0];
  console.log("opponent: " + opponentPrevious);
  var result = PS.Prisoner.titForTat(typeof opponentPrevious === 'undefined' ? PS.Prisoner.Nothing : PS.Prisoner.Just(opponentPrevious));
  console.log("result: " + result);
  return callback(null, result);
});
