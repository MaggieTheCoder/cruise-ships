const Ship = require("../src/cruiseships");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship constructor", () => {
  describe('with ports and an itinerary', () => {
    let ship;
    let liverpool;
    let durban;
    let itinerary;
    beforeEach(() => {
      liverpool = { 
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'liverpool',
        ships: []
      };
      durban = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'durban',
        ships: []
      };
    itinerary = new Itinerary([liverpool, durban]);
    ship = new Ship(itinerary);

    });

    it("returns an object", () => {
      // const port = new Port("Dover");
      // const itinerary = new Itinerary([port]);
      // const shipMaggie = new Ship(itinerary);
      expect(ship).toBeInstanceOf(Object);
    });

    it("to have a starting port", () => {
      
      // const port = new Port("Bristol");
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      expect(ship.currentPort).toBe(liverpool);
    });

    it("can set sail", () => {
      // const liverpool = new Port("Liverpool");
      // const durban = new Port("Durban");
      // const itinerary = new Itinerary([liverpool, durban]);
      // const shipTheodora = new Ship(itinerary);
      
      ship.setSail();
      
      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(liverpool);
      expect(liverpool.removeShip).toHaveBeenCalledWith(ship);
  
    });

    it("can dock at a different port", () => {
      ship.setSail();
      ship.dock();
  
      expect(ship.currentPort).toBe(durban);
      expect(durban.addShip).toHaveBeenCalledWith(ship);
    });

    it('adds ship to port on instatiation', () => {
     
      expect(liverpool.addShip).toHaveBeenCalledWith(ship);
    });

  });
  

  it('can\'t sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});
