import products from "./laser-cutting-machine/products.json"

export default (req:any, res:any) => {
    
    console.log("RES",res);

    const selectedProduct = products.items.filter((prod)=>prod.id==="1")
    
    
    
    res.status(200).json(selectedProduct)
  }