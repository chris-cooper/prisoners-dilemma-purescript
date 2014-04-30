var PS = require('./prisoner');
var dilemma = require('dilemma');

dilemma('pure-tit-for-tat', { server: 'rtchub' }, function(results, callback) {
  var opponentPrevious = results.opponent[0];

  return callback(null, PS.Prisoner.titForTat(PS.Prisoner.Just(opponentPrevious)));
});
