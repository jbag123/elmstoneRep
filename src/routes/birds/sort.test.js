const birdSortAlpha = require("./index.ts");
const users = [
  { id: 1, name: "Josh" },
  { id: 2, name: "James" },
  { id: 3, name: "Archie" },
];

test("sorts array with given objects", () => {
  expect(birdSortAlpha(users)).toEqual([
    { id: 3, name: "Archie" },
    { id: 2, name: "James" },
    { id: 1, name: "Josh" },
  ]);
});
