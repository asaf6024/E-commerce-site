import React from 'react'
import Dessert from '../components/Dessert/Dessert'
import Food from '../components/Food/Food'
import Products from '../components/Products/Products'

const Home = () => {
    return (
        <>
            <Food />
            <hr />
            <Products />
            <hr />
            <Dessert />
        </>
    )
}
export default Home