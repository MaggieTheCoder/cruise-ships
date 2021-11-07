const Ship = require("../src/cruiseships");

describe("Ship constructor", () => {
  it("returns an object", () => {
    const shipMaggie = new Ship();
    expect(shipMaggie).toBeInstanceOf(Object);
  });

  //
  it("to have a starting portt", () => {
    const ship = new Ship("Bristol");
    expect(ship.startingPort).toBe("Bristol");
  });
});
