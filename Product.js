import React from "react"

function Product(props) {
    console.log(props)
  return (
    <div>
        <h2>{props.products.name}</h2>
    </div>
  )
}

export default Product
