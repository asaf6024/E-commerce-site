import { MDBCard, MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import React, { useState, useEffect } from 'react'
import './products.css'
import { useHistory } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from '../../redux/products/products-actions';
import { get_chart, delete_chart_by_id } from '../../redux/chart/chart-actions';

const Products = (props) => {
    let history = useHistory()

    useEffect(() => {
        // props.getProducts()
        props.get_chart()
    }, [])

    const loadProducts = props.products.map(product => {
        let classActive = ''
        props.chart.map(c => c.id == product.id ? classActive = 'active' : '')
        { console.log('product', product) }

        return <MDBCol lg='4' sm='12' className='text-center'>
            <MDBCard key={product.id} className={`productCard ${classActive}`}>
                <h3 className='font-italic'>{product.name}</h3>
                <img src={product.img} onClick={() => classActive != '' ? history.push(`/product/update/${product.id}`) : history.push(`/product/add/${product.id}`)} />
                {/* <i className="fas fa-info-circle fa-2x" title='info'
                    onClick={() => history.push(`/product/${product.id}`)}
                ></i> */}
                <p className='productDescription'>{product.description}</p>
                <b className='productPrice'>{product.price} ₪</b>
                <button className='btn' onClick={() =>
                    classActive != '' ? history.push(`/product/update/${product.id}`) : history.push(`/product/add/${product.id}`)
                }>
                    {classActive != '' ? 'Update' : 'Buy'}
                </button>
                {classActive != '' ?
                    <>
                        {/* <button className=' chartButton'>
                            <span onClick={() => history.push(`/chart`)}>In Shopping cart</span>
                        </button> */}
                        <button className='trashButton btn-danger'>
                            <span onClick={() => props.delete_chart_by_id(product.id)}>
                                Remove from cart</span>
                        </button>
                    </>
                    : ''
                }
            </MDBCard>
        </MDBCol >

    })


    return (
        <div className="container-fluid" id='drinks'>
            <MDBContainer>
                <h2 className='text-center font-weight-bold headlineOfProduct'>Drinks <i className="fas fa-glass-cheers"></i></h2>
                {/* <a href='/#desserts'>
                    <i className="fas fa-arrow-down DownArrow fa-2x"></i>
                </a> */}
                <MDBRow>
                    {
                        loadProducts
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.productsReducer.products,
        chart: state.chartReducer.chart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getProducts,
            get_chart,
            delete_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)

