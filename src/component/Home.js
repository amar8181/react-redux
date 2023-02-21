import React from "react";

function Home(){
    return(
        <div>
            <div className="Add-to-cart">
                <img src="https://icon-library.com/images/add-to-cart-icon/add-to-cart-icon-23.jpg" />
            </div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://vlebazaar.in/image/cache/wp/gj/-Redmi-9A-Nature-Green-32-GB-2-GB-RAM/-Redmi-9A-Nature-Green-32-GB-2-GB-RAM-1000x1000h.webp" />
                </div>
                <div className="text-wrapper item">
                        <span>I-phone</span>
                        <span>Price: $1000.00</span>
                </div> 
                <div className="btn-wrapper item">
                        <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;