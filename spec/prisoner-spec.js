PS = require('../prisoner');

describe("Prisoner", function() {
  
  it("should always betray", function(){
    expect(PS.Prisoner.alwaysBetray).toBe('D');
  });

  it("should always trust", function(){
    expect(PS.Prisoner.alwaysTrust).toBe('C');
  });

});