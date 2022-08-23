import { birdSortAlpha } from "./index.ts";
const users = [
  { id: 1, name: "Josh" },
  { id: 2, name: "James" },
  { id: 2, name: "Archie" },
];

test("sorts array with given numbers", () => {
  expect(birdSortAlpha(1, 2)).toBe([
    { id: 2, name: "Archie" },
    { id: 2, name: "James" },
    { id: 1, name: "Josh" },
  ]);
});
