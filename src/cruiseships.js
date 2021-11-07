class Ship {
  constructor(port) {
    this.currentPort = port;
  }

  setSail() {}

  dock(port) {
    this.currentPort = port;
  }
}
module.exports = Ship;
