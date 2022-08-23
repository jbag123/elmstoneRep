import { Router, Request, Response } from "express";
const birds = require("../../../public/data.json");

// interface Birds {
//   name: string;
//   description: string;
//   imgArc: string;
// }

// sort birds alphabetically
export const birdSortAlpha = (x, y) => {
  if (x.name < y.name) {
    return -1;
  } else if (y.name < x.name) {
    return 1;
  } else {
    return 0;
  }
};

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // Respond with the bird data from /public/data.json sorted in alphabetical order
  res.json(birds.sort(birdSortAlpha));
});

export default { router };
