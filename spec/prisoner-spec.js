PS = require('../prisoner');

describe("Prisoner", function() {

  it("should always betray", function() {
    expect(PS.Prisoner.alwaysBetray).toBe('D');
  });

  it("should always trust", function() {
    expect(PS.Prisoner.alwaysTrust).toBe('C');
  });

  it("should tit for tat", function() {
    expect(PS.Prisoner.titForTat(PS.Prisoner.Just(PS.Prisoner.trust))).toBe('C');
    expect(PS.Prisoner.titForTat(PS.Prisoner.Just(PS.Prisoner.betray))).toBe('D');
    expect(PS.Prisoner.titForTat(PS.Prisoner.Nothing)).toBe('D');
  });

});
