import React, { useState } from 'react'
import '../App.css'
import data from './data'
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ButtonGroup,Button} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';


const Products = () => {
  const [items,setItem]=useState(data);
const [filter,setFilter]=useState('')

  const filterMenu=(category)=>{
    const updatedItems=data.filter((curElem)=>{
      return curElem.category===category;
    });
    setItem(updatedItems);
  }

    const { addItem } = useCart();


function searchText(e){
  setFilter(e.target.value);
  let dataSearch=data.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
      )
      
  })
  setItem(dataSearch);
}








    return (
  <>   <div className="container mb-5 mt-5">
         <h2 className='text-center mb-3'>FEATURED PRODUCTS</h2>

         <div className="Search-item d-flex justify-content-center mt-4 mb-3">
<div className="box">
<input type='text' value={filter} placeholder='Search Items.....' onChange={searchText}></input>
<SearchIcon />
</div>

</div>

        <div className='my-2 text-center'> 
        
        <ButtonGroup aria-label="Basic example">
        <Button onClick={()=>setItem(data)} variant="outline-warning"><b>All</b></Button>
  <Button onClick={()=>filterMenu("men's clothing")} variant="outline-warning"><b>Men's Clothing</b></Button>
  <Button onClick={()=>filterMenu("jewelery")} variant="outline-warning"><b>Jwelery</b></Button>
  <Button onClick={()=>filterMenu("electronics")} variant="outline-warning"><b>Electronics</b></Button>
  <Button onClick={()=>filterMenu("women's clothing")} variant="outline-warning"><b>Women's Clothing</b></Button>
</ButtonGroup>


</div>



<div className="row">
{items.map((item)=>{
    return <div key={item.id} className="col-md-3">

    <div className="card mt-3">

        <div className="product-1 align-items-center p-2 text-center">
            <img src={item.image} alt="product img" className="rounded img-fluid card-img-top" />
            <h5 className='mt-2'> {item.title}</h5>
            <div className="mt-3 info">
                <span className="text1 d-block">
                    Lorem ipsum dolor sit amet.
                </span>
                <span>Lorem, ipsum dolor.</span>
            </div>

            

            <div className="cost mt-3 text-dark">
          <span> ${item.price}</span>
            </div>
        </div>
        <div  onClick={() => {
                addItem(item);
                toast.success("Product added successfully!");
              }} className="p-3 item-cart text-center text-white mt-3 cursor">
            <span className='text-uppercase'
            
            
            >Add to cart</span>
        </div>
        
    </div>
</div>
})}

</div>
     </div>
     <ToastContainer
   position="top-left"
     />
     </>
    )
}

export default Products
