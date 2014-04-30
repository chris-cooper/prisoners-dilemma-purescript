var PS = require('./prisoner');

console.log('hi there ' + PS.Prisoner.incr(5));
console.log('always betray: ' + PS.Prisoner.alwaysBetray);
console.log('titForTat betray: ' + PS.Prisoner.titForTat(PS.Prisoner.Just(PS.Prisoner.betray)));
console.log('titForTat trust: ' + PS.Prisoner.titForTat(PS.Prisoner.Just(PS.Prisoner.trust)));
console.log('titForTat nothing: '+ PS.Prisoner.titForTat(PS.Prisoner.Nothing));
