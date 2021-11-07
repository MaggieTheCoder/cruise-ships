const Ship = require("../src/cruiseships");
const Port = require("../src/port");

describe("Ship constructor", () => {
  it("returns an object", () => {
    const shipMaggie = new Ship();
    expect(shipMaggie).toBeInstanceOf(Object);
  });

  //
  it("to have a port", () => {
    // const ship = new Ship("Bristol");
    const port = new Port("Bristol");
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });

  it("can set sail", () => {});
  const shipTheodora = new Ship("Dover");
  shipTheodora.setSail();
  expect(shipTheodora.setSail()).toBeFalsy();

  it("can dock at a different port", () => {});
  const felixstowe = new Port("Felixstowe");
  const ship = new Ship(felixstowe);
  const calais = new Port("Calais");
  ship.dock(calais);

  expect(ship.currentPort).toBe(calais);
});
