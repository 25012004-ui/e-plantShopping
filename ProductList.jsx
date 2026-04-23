import React from "react";

const products = [
  { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/150" }
];

const ProductList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Plant Shop 🌿</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              width: "150px",
              textAlign: "center"
            }}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
