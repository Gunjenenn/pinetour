
"use client";

import { useState } from "react";

const Products = [
  { id: 1, name: "Гар утас", price: 1200000, quantity: 5 },
  { id: 2, name: "Чихэвч", price: 85000, quantity: 12 },
  { id: 3, name: "Гар цүнх", price: 45000, quantity: 3 },
  { id: 4, name: "Ном", price: 25000, quantity: 20 },
  { id: 5, name: "Кофе", price: 8000, quantity: 0 },
];

const Page = () => {
  const [products, setProducts] = useState(Products);
  const [sags, setSags] = useState([]);

  const add = (product) => {
    const found = sags.find((cartItem, index) => {
      return cartItem.id === product.id;
    });

    if (found) {
      const newItem = sags.map((cartItem, index) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });

      setSags(newItem);
    } else {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      setSags([...sags, cartItem]);
    }
  };

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={product.id} className="flex gap-4">
            <div>{product.name}</div>
            <div>Price: {product.price}</div>
            <div>Quantity: {product.quantity}</div>
            <button onClick={() => add(product)}> add to cart</button>
          </div>
        );
      })}
      {sags.map((cartItem, index) => {
        return (
          <div key={cartItem.id} className="flex gap-4">
            <div>
              {cartItem.name} X {cartItem.quantity} ={cartItem.price}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;