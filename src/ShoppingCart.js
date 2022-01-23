import React, { useState } from "react";

const initialCart = [
  { id: 1, title: "Producto", description: "Desc" },
  { id: 2, title: "Producto #2", description: "Desc #2" },
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
    <div className="container bg-primary">
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
        <div key={product.id} className="text-white mt-2">
          <h3>
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
            <div className="bg-white py-3 px-5">
            <pre>
              {JSON.stringify(cart, null, 4)}
            </pre>
            </div>

    </div>
  );
};

export default ShoppingCart;
