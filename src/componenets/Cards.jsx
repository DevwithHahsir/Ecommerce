/* eslint-disable no-unused-vars */
import React from "react";
import { Products } from "./productArray";
import { v4 as uuidv4 } from "uuid";
import "./card.css";

import { addcart,removeCart } from "../features/cart/SliceCart";
import { useDispatch, useSelector } from "react-redux";


export default function Cards() {

  const dispatch=useDispatch();
 


  const addCart=(img,title,price,count)=>{
        //  alert("hello")
    const item = {
      id: uuidv4(),
      img: img,
      title: title,
      price: price,
      
      
    };
    dispatch(addcart(item));
  };

  return (
    <div className="cards-container">
      {Products.map((product, id) => (
        <div className="card" key={id}>
          <img src={product.image} alt={product.title} className="card-img"  loading="lazy"/>
          <h2 className="card-title">{product.title}</h2>
          <p className="card-price">${product.price}</p>
          <button onClick={() => addCart(product.image, product.title, product.price)}>
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}
