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
});
