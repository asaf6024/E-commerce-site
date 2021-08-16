import { MDBCard, MDBCol, MDBRow } from 'mdbreact'
import React from 'react'
import Dessert from '../components/Dessert/Dessert'
import Food from '../components/Food/Food'
import Landing from '../components/Landing'
import Products from '../components/Products/Products'

const Home = () => {
    return (
        <>
            <Landing />
            <hr />
            <Food isHome={true} />
            <hr />
            <Products isHome={true} />
            <hr />
            <Dessert isHome={true} />
        </>
    )
}
export default Home