import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { removeCart } from "../features/cart/SliceCart";

export default function Cart() {
  const [basket, setBasket] = useState([]); // State to store the basket items
   const dispatch =useDispatch()


  const GetData = () => {
    const storedBasket = JSON.parse(localStorage.getItem("data")) || [];
    console.log("Stored Basket from localStorage:", storedBasket); // Debugging

    const updatedBasket = storedBasket.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Set quantity to 1 if it doesn't exist
    }));

    console.log("Updated Basket:", updatedBasket); // Debugging

    setBasket(updatedBasket); // Update the state with the updated basket
    localStorage.setItem("data", JSON.stringify(updatedBasket)); // Save the updated basket back to localStorage
  };

  const addQuantity = (id) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }; // Increment quantity
      }
      return item;
    });
    setBasket(updatedBasket); // Update the state with the updated basket
    localStorage.setItem("data", JSON.stringify(updatedBasket)); // Save the updated basket back to localStorage
  };

  const handleRemove = (id) => {
    const updatedBasket = basket
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            // Decrease the quantity if it's greater than 1
            return { ...item, quantity: item.quantity - 1 };
          }
          // If quantity is 1, remove the item
          return null;
        }
        return item;
      })
      .filter((item) => item !== null); // Remove null items from the array

    setBasket(updatedBasket); // Update the state with the updated basket
    localStorage.setItem("data", JSON.stringify(updatedBasket)); // Save the updated basket back to localStorage



    dispatch(removeCart)
       
  };

 

  useEffect(() => {
    GetData(); // Fetch the basket data when the component mounts
  }, []);

  useEffect(() => {
  
  }, [basket]);

  return (
    <div className="cards-container">
      {basket.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        basket.map((product, id) => (
          <div className="card" key={id}>
            <img
              src={product.img}
              alt={product.title}
              className="card-img"
              loading="lazy"
            />
            <h2 className="card-title">{product.title}</h2>
            <p className="card-price">${product.price}</p>
            <p className="card-quantity">Quantity: {product.quantity}</p>
            <button
              className="add"
              onClick={() => addQuantity(product.id)} // Call addQuantity with the product ID
            >
              Add
            </button>
            <button
              className="remove"
              onClick={() => handleRemove(product.id)} // Pass the product ID to handleRemove
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}