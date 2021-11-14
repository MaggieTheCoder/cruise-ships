const Ship = require("../src/cruiseships");
const Port = require("../src/port");

describe("Port constructor", () => {
  describe('with ships and ports', () => {
   let port;
   let ship;
   
    
   beforeEach(() => {
    port = new Port('Bristol')
    ship = {}; 
   });

    it("returns an object", () => {
      // const port = new Port();
      expect(port).toBeInstanceOf(Object);
    });
    
    it("checks that port has a name property", () => {
      // const port = new Port("Bristol");
      expect(port.name).toEqual("Bristol");
    });

    it('adds a ship to the port', () => {
      // const port = new Port('Saldanha')
      // const ship = {};
      port.addShip(ship)
      expect(port.ships).toContain(ship)
    });
    it('removes a ship from the port', () => {
      // const port = new Port('Bath')
      // const ship = {}
      const shipTwo = {}
      port.addShip(ship)
      port.addShip(shipTwo)
      port.removeShip(ship)
    
      expect(port.ships).toEqual([shipTwo]);
    });
  });
});
