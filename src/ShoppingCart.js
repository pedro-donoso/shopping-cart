import React, { useState } from "react";

const initialCart = [
  { id: 1, title: "Product", description: "Desc" },
  { id: 2, title: "Product #2", description: "Desc #2" },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (productId) => {
    const changedCart = cart.filter((product) => product.id !== productId);
    setCart(changedCart);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();

    const changedCart = [newProduct, ...cart];
    setCart(changedCart);
  };

  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setCart(changedCart);
  };

  return (
    <div>
      <button
        onClick={() =>
          addProduct({
            title: " Nuevo Producto",
            description: "Nueva Descripción",
          })
        }
      >
        Add
      </button>

      {cart.map((product) => (
        <div key={product.id}>
          <h3>
            {product.id}
            {product.title}
          </h3>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        
          <button
            onClick={() =>
              updateProduct({
                id: product.id,
                title: " Producto Editado",
                description: "Descripción Editada",
              })
            }
          >
            Update
          </button>
            <hr/>
        </div>
      ))}
            <div>
            <pre>
              {JSON.stringify(cart, null, 4)}
            </pre>
            </div>

    </div>
  );
};

export default ShoppingCart;
