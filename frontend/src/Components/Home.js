import React from 'react';
import '../Home.css';
import Product from './Product';


function Home() {
  return (
    <div className='home'>
       <div className="home__container">
            <img className='home__image' src="https://www.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=761" alt="" />

            <div className="home__row">
                {/*product1 row 1 */}
                <Product title='Apple Airpods' price={150} image = "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg"  rating= {5}/>

                {/*product2 row 1 */}
                <Product title='Logitech Keyboard' price={32} image = "https://m.media-amazon.com/images/I/61+U9lMboFL._AC_UY218_.jpg"  rating= {5}/>
            </div>


            <div className="home__row">
                {/*product1 row2 */}
                <Product title="Puma Men's Jacket" price={26} image = "https://m.media-amazon.com/images/I/51XwuBfOOIL.jpg"  rating= {4}/>
                

                {/*product2 row2 */}
                <Product title='Faux Leather Handbags' price={20} image = "https://m.media-amazon.com/images/I/71Raw8VUk5L._AC_UL320_.jpg"  rating= {4}/>

                {/*product3 row2 */}
                <Product title='Decorative Painting' price={6} image = "https://m.media-amazon.com/images/I/91KCVwTbFjL._AC_UL320_.jpg"  rating= {5}/>
  
  

            </div>


            <div className="home__row">
                {/*product1 row3 */}
                <Product title='Apple Watch series 8' price={550} image = "https://m.media-amazon.com/images/I/71uOgDy40BL._AC_SX640_.jpg"  rating= {5}/>
            </div>

       </div>
    </div>
  )
}

export default Home
