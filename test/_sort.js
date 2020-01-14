const SortOfQuick = require("../src/Sort");
const { expect } = require("chai");

let quick;
describe("Sort", () => {
  beforeEach(() => {
    quick = new SortOfQuick([11, 10, 21, 11, 35, 23, -1]);
  });

  it("should be a function", () => {
    expect(SortOfQuick).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(SortOfQuick.prototype.sort).to.be.a("function");
  });
  it("should sort numbers using sort method", () => {
    const his = quick.sort();
    expect(his[his.length - 1]).to.deep.equal([-1, 10, 11, 11, 21, 23, 35]);
  });
  it("should be a function", () => {
    expect(SortOfQuick.prototype.returnValue).to.be.a("function");
  });
  it("should return value", () => {
    expect(quick.returnValue("value")).to.equal("value");
  });
});
