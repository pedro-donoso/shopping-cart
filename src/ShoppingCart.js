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
        newProduct,
      ...cart,
    
    ];
    setCart(changedCart);
  }

  return (
    <div>

      <button onClick={()=>addProduct({
      title:" Nuevo Producto", 
      description:"Descripción Producto"
      })}>
      Add
      </button>

      {cart.map(product=>(
        <div key={product.id}>
          <h2>{product.id}{product.title}</h2>
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
