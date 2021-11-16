const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("itinerary object", () => {
  it("returns an object", () => {
    const itinerary = new Itinerary();
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("checks if itinerary has ports", () => {
    const tees = jest.fn();
    const calais = jest.fn();
    const itinerary = new Itinerary([tees, calais]);
    expect(itinerary.ports).toEqual([tees, calais]);
  });
});
