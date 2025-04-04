import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { removeCart } from "../features/cart/SliceCart";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import "./cart.css";
import PaymentModal from "./PaymentModal";

export default function Cart() {
  const [basket, setBasket] = useState([]); // State to store the basket items
  const dispatch = useDispatch();

  const GetData = () => {
    const storedBasket = JSON.parse(localStorage.getItem("data")) || [];

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

  setBasket(updatedBasket);
  localStorage.setItem("data", JSON.stringify(updatedBasket));

  // If the product is removed (quantity was 1), decrement the count
  const productToRemove = basket.find((item) => item.id === id && item.quantity === 1);
  if (productToRemove) {
    const updatedCount = JSON.parse(localStorage.getItem("count")) - 1;
    localStorage.setItem("count", JSON.stringify(updatedCount)); // Update count in localStorage
    dispatch(removeCart({ id })); // Dispatch Redux action to update global state
  }
};


  const [peroceedPayment, setProceedPayment] = useState(false);
  let [cancelPayment, setCancelPayment] = useState("Add Payment");

  const AddPayment = () => {

    if(basket.length!=0)
    {

      setCancelPayment((prevStatus) => {
        return prevStatus === "Add Payment" ? "Cancel Payment" : "Add Payment";
      });
      setProceedPayment((prevState) => !prevState); // Toggle the state
    }
    else
    {
      alert("you can not make payment  || Empty cart")
    }
  };

  useEffect(() => {
    GetData(); // Fetch the basket data when the component mounts
  }, []);

  useEffect(() => {}, [basket]);

  return (
    <div className="Main-container">
    <div className="cart-main-container">
      <div className="cart-cards-container">
        {basket.length === 0 ? (
          <p className="EmptyCart">Your cart is empty.</p>
        ) : (
          basket.map((product, id) => (
            <div className="card cart-card " key={id}>
              <img
                src={product.image}
                alt={product.title}
                className="card-img"
                loading="lazy"
              />
              <h2 className="card-title cart-title">{product.title}</h2>
              <p className="card-price cart-price">${product.price}</p>

              <div className="cart-btns">
                <button
                  className="add"
                  onClick={() => addQuantity(product.id)} // Call addQuantity with the product ID
                >
                  <IoIosAdd />
                </button>

                <p className="card-quantity">{product.quantity}</p>

                <button
                  className="remove"
                  onClick={() => handleRemove(product.id)} // Pass the product ID to handleRemove
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Billing section */}

      <div className="bil-container">
        <div className="cart-bill-heading">
          <h1>Billing Section</h1>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>QnT</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-bill">
            <h1>Total bill</h1>
            {/* <h1>$10000</h1> */}
            {(() => {
              const totalBill = basket.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              );
              return <h1>${totalBill.toFixed(2)}</h1>;
            })()}
          </div>

          <div className="payment-btn">
            <button onClick={AddPayment}>{cancelPayment}</button>
          </div>

         
        </div>
       
       
      </div>


      </div>
    

      {/* payment-carddd */}
      <div className="paymentmethods">
      {peroceedPayment && (
        <div className="paymentstyle">

          <PaymentModal/>
        </div>
        
       )}
         </div>

    </div>
  );
}
