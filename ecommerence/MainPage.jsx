import React, { useState } from 'react'
import "./MainPage.css"

const MainPage = (props) => {

  let[product,setProduct]=useState(props.data)

  function handleInput(eve){
    let filterData=props.data.filter((ele,i)=>{
      if(ele.title.toLowerCase().includes(eve.target.value.toLowerCase())){
        return ele
      }
    })
    setProduct(filterData)

  }

console.log(props.data);

  return (
    <div>
      <div>
        <input type="text" placeholder='enter the product name' onInput={handleInput} />
        
       
      </div>
        <section className='main'>
          {product.map((e,i)=>{
            return <div key={e.id}>
              <img src={e.image} alt="" />
              <h1>price: Rs.{e.price}</h1>
              <h2>Rating:{e.rating.rate}</h2>
              <h2>Title:{e.title}</h2>
              <button>add to cart</button>
            </div>

            
        

          })}
        </section>
      
    </div>
  )
}

export default MainPage
