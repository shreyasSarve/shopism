// import { useStripe } from '@stripe/react-stripe-js';
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useState } from "react";
import { getBasketTotal } from "../reducer";
import { useEffect } from "react";
import axios from "../axios";
import { db } from "../firebase";
import {loadStripe} from '@stripe/stripe-js';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);


  useEffect(() => {
    // generate the special stripe secret which allows
    const getClientSecret = async () => {
      console.log("I am inside get secrete");
      const response = await axios({
        method: "post",
        // stripe expects the total in a currencies subunits
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      console.log("response.data :>> ", response.data);
      setClientSecret(response.data.clientSecret);
      //    axios used for request post get
    };

    getClientSecret();
  }, [basket]);

  console.log("the secret is >>>", clientSecret);
  const handleSubmit = async (event) => {
    //    fancy stripe stuff
    event.preventDefault();
    setProcessing(true);
    // so buy button only once buyied
    
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        // db
        //   .collection('users')
        //   .doc(user?.uid)
        //   .collection('orders')
        //   .doc(paymentIntent.id)
        //   .set({
        //       basket: basket,
        //       amount: paymentIntent.amount,
        //       created: paymentIntent.created
        // })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    //  listen for changes in the cardelement
    // an display any errors as the customer types their card detailes
    setDisabled(Event.empty);
    setError(Event.error ? Event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* paymentsection -- delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {/* <p>{user.email}</p> */}
            <p>123 chancalani colony</p>
            <p>dhanbad, Jharkhand</p>
          </div>
        </div>
      </div>

      {/* payment section - Review Items */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment__items">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* payment section - payment method */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          {/* Stripe magic will go */}

          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>

            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
