import React, {useState} from 'react';

const initialCart = [
  { id: 1, title: 'Product', description: 'Desc'},
  { id: 2, title: 'Product #2', description: 'Desc #2'},
]

const ShoppingCart=()=>{
  const [cart, setCart]=useState(initialCart);

  const deleteProduct=()=>{
    const changedCart = [];
    setCart(changedCart);
  }

  return (
    <div>

      <button onClick={()=>deleteProduct(2)}>
        Delete
      </button>


      {cart.map(product=>(
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
