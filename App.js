import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
    const exampleinfo = productsData.map(item => <Product key={item.id} product={item}/>)
  return (
    <div>
        {exampleinfo}
    </div>
  )
}

export default App
