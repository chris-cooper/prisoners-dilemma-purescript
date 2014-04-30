var dilemma = require('dilemma');

function randomResult() {
  return ['C', 'D'][(Math.random() * 2) | 0];
}

dilemma('tit-for-tat', { server: 'rtchub' }, function(results, callback) {
  var opponentPrevious = results.opponent[0];

  return callback(null, opponentPrevious ? opponentPrevious : randomResult());
});