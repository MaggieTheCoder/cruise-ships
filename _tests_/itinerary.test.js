const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("itinerary object", () => {
  it("returns an object", () => {
    const itinerary = new Itinerary();
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("checks if itinerary has ports", () => {
    const tees = new Port("Tees");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([tees, calais]);
    expect(itinerary.ports).toEqual([tees, calais]);
  });
});
