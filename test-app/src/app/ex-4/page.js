"use client";
import {Info} from "../_components/ex4"
import { useState } from "react";


const Page = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Гар утас", price: 1200000, quantity: 5 },
        { id: 2, name: "Чихэвч", price: 85000, quantity: 12 },
        { id: 3, name: "Гар цүнх", price: 45000, quantity: 3 },
        { id: 4, name: "Ном", price: 25000, quantity: 20 },
        { id: 5, name: "Кофе", price: 8000, quantity: 0 },
    ]);
    
    const [sags, setSags] = useState([]);

const add = (id) => {
    const newProducts = products.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setProducts(newProducts);
};


    return (
        <div>
            <div>PRODUCTS</div>
            <div>
                {products.map((item, index) => {
                    return <Info key={index} id={item.id} name={item.name} price={item.price} quantity={item.quantity}/>
                })}
            </div>
        </div>

    );
}; 
export default Page;
