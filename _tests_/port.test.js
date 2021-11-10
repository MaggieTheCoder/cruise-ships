const Ship = require("../src/cruiseships");
const Port = require("../src/port");

describe("Port constructor", () => {
  it("returns an object", () => {
    const newPort = new Port();
    expect(newPort).toBeInstanceOf(Object);
  });

  it("checks that port has a name property", () => {
    const portBristol = new Port("Bristol");
    expect(portBristol.name).toEqual("Bristol");
  });

  it('adds a ship to the port', () => {
    const port = new Port('Saldanha')
    const shipPeter = {};
    port.addShip(shipPeter)
    expect(port.ships).toContain(shipPeter)
  })

  it('removes a ship from the port', () => {
    const port = new Port('Bath')
    const shipHoney = {}
    const shipMatthew = {}
    port.addShip(shipHoney)
    port.addShip(shipMatthew)
    port.removeShip(shipHoney)
  
    expect(port.ships).toEqual([shipMatthew]);
  });

});
``