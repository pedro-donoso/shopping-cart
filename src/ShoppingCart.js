import React, { useState } from "react";

const initialCart = [
  { id: 1, title: "Producto", description: "Descripción" },
  { id: 2, title: "Producto #2", description: "Descripción #2" },
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
    <div className="container">
      <button className="btn btn-sm btn-success my-2"
        onClick={() =>
          addProduct({
            title: " Nuevo Producto",
            description: "Nueva Descripción",
          })
        }
      >
        + Producto
      </button>

      {cart.map((product) => (
        <div key={product.id} className="mt-2">
          <h3 className="my-3">
            {product.id}
            {product.title}
          </h3>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)} className="btn btn-sm btn-danger">- Producto</button>
        
          <button className="btn btn-sm btn-warning mx-2"
            onClick={() =>
              updateProduct({
                id: product.id,
                title: " Producto Actualizado",
                description: "Descripción Editada",
              })
            }
          >
            Actualizar
          </button>
          <hr/>
        </div>
      ))}
            <div className="bg-warning py-2 px-2 mt-2">
            <pre>
              {JSON.stringify(cart, null, 4)}
            </pre>
            </div>

    </div>
  );
};

export default ShoppingCart;
