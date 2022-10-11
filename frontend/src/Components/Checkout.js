import React from 'react'
import '../Checkout.css'
import { useStateValue } from '../StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
const [{basket} , dispatch] = useStateValue();

  return (
    <div className='checkout'>
       <div className="chechout__left">
        <img  className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/Jupiter/phase3/bankstripe/P3_Bank_Rec_PC.jpg" alt="Bank-advertisment"  />
        
        <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>

             
            {/*checkout product*/}
            {basket.map(item => (
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

       <div className="checkout__right">
          <Subtotal/>
       </div>

    </div>
  )
}

export default Checkout
