const Ship = require("./cruiseships");

class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship)

  };

  removeShip(ship) {
    const indexOfShip = this.ships.indexOf(ship); //this gives you the index of the ship in the array
    this.ships.splice(indexOfShip, 1)
      };
    }

  


module.exports = Port;
