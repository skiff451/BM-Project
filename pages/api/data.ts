import data from "./data.json"

export default (req:any, res:any) => {
    res.status(200).json(data)
  }