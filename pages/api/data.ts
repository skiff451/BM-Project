import type { NextApiRequest, NextApiResponse } from 'next'
import data from "./data.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const categoryId: number = +req.query.id;
  const emptyQuery = Object.keys(req.query).length === 0;

  if (!emptyQuery) {
    const category = data.category.filter(
      (category) => category.id === categoryId
    )[0];
    res.status(200).json(category.products);
  } else {
    res.status(200).json(data);
  }
};
