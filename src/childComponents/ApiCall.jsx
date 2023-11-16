import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getProducts()
    },[])
    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products');
        let productList = await res.json();
        setProducts(productList)
    //    console.log(productList)
    }
  return (
    <>
        <h2>Api Call Fetech Method</h2>
        {
            products.map((ele,ind)=>{
                return(
                    <>
                        {/* <h2>{ind}</h2>
                        <h2>{ele.category}</h2>
                        <h2>{ele.description}</h2>
                        <h2>{ind}</h2>
                        <h2>{ele.price}</h2>
                        <h2>{ele.title}</h2> */}
                    </>
                )
            })
        }
    </>
  )
}

export default ApiCall