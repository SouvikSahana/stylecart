import React from 'react'
import "./Home.css"
import Product from './Product'
import Categories from './Categories'

const productData=[
    {
        id:"1",
        title:"Women Fit and Flare Dark Blue, Brown, White Dress",
        price: 469,
        // rating: 4,
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/dress/r/n/g/m-flower-gown-fashion2wear-original-imagq3s96yfyyxpq.jpeg?q=70",
    },
    {
        id:"2",
        title:"Women High Low Maroon Dress",
        price: 269,
        // rating: 4,
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/dress/k/v/s/xxl-dv342-daevish-original-imag9ct3wxfduccm-bb.jpeg?q=70&crop=false",
    },
    {
        id:"3",
        title:"Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price: 339,
        // rating: 4,
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/p/g/x/s-st1-vebnor-original-imagn7hdggmex5bw.jpeg?q=70&crop=false",
    },
    {
        id:"4",
        title:"Men Regular Fit Black Lycra Blend Trousers",
        price: 330,
        // rating: 4,
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/p/k/i/32-3d-2-lishaday-original-imaguvyyxuarphxe.jpeg?q=70&crop=false",
    },
    {
        id:"5",
        title:"Men Solid Single Breasted Formal Blazer",
        price: 2400,
        // rating: 4,
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/blazer/x/p/v/s-465826-v-mart-original-imaghghqpzg7fhcy.jpeg?q=70&crop=false",
    }
]
const Home = () => {
  return (
    <div className='home'>
        <Categories />
        <div className="home_container">
            {/* <img src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png" alt="amazon brand image" className='home_image'/> */}

            <div className="home_row">
                {productData.map((data)=><Product title={data.title} id={data.id} price={data.price} image={data.image}/>)}
            </div>
        </div>
    </div>
  )
}

export default Home