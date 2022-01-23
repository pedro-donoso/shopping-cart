import React, {useState} from 'react';

const initialCart = [
  { id: 1, title: 'Product', description: 'Desc'},
  { id: 2, title: 'Product #2', description: 'Desc #2'},
]

const ShoppingCart=()=>{
  const [cart, setCart]=useState(initialCart);

  const deleteProduct=(productId)=>{
    const changedCart = cart.filter(product=>product.id !==productId);
    setCart(changedCart);
  }

  const addProduct=(newProduct)=>{
    newProduct.id=Date.now();

    const changedCart=[
      ...cart,
      newProduct,
    ];
    setCart(changedCart);
  }

  return (
    <div>

      <button onClick={()=>addProduct({title:"Nuevo título", description:"Nueva Desc"})}>
      Add
      </button>

      {cart.map(product=>(
        <div key={product.id}>
          <h1>{product.id}{product.title}</h1>
          <p>{product.description}</p>
          <button onClick={()=>deleteProduct(product.id)}>
        Delete
      </button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
