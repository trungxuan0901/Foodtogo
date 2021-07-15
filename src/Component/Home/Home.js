import React from 'react'
import '../Home/Home.css'
import TomHum from '../img/TomHum.jpg'
import Product from '../Product/Product'

function Home (){
    return (
        <div className="home">
            {/* <img className="home__image" src={image_1} alt="hinh anh"/> */}
            <div className="home__row">
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />

            </div>
            <div className="home__row">
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />

            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            </div>
            
            <div className="home__row">
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            <Product
                id ="1"
                title ="Tôm Hùm Biển Đông"
                price = {50}
                rating ={4}
                image = {TomHum}
            />
            </div>

        </div>

       
    )
}

export default Home;