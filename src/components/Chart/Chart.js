import React, { useEffect, useState } from 'react'
import './cart.css'
// import './productDetails.css'
import { useHistory } from "react-router-dom";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get_chart, delete_chart_by_id, delete_chart } from '../../redux/chart/chart-actions';

const ChartCom = (props) => {
    const history = useHistory()
    // let currentPrice = 10;
    const [currentPrice, setCurrentPrice] = useState([])
    const [productToBuy, setProductToBuy] = useState([])
    const [quantity, setQunatity] = useState(1)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        props.get_chart()

    })

    useEffect(() => {
        console.log('chart data2', props.chart)
        setLoad(false)

    }, [])

    const setLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(props.chart));
        alert('Saved')
        history.push('/cart')


    }
    const deleteLocalStorage = () => {
        localStorage.removeItem('cart')
        props.delete_chart()
        // history.push('/cart')
    }
    return (
        <div className='container-fluid'>
            <MDBContainer>
                {/* <MDBCol sm='12' className='backBtn'>
                    <button onClick={() => history.push('/')}>
                        <i className="fas fa-long-arrow-alt-left text-dark"></i>&nbsp;
                        Back
                    </button>
                </MDBCol> */}
                <MDBCard>
                    <h1 className='text-center text-dark'>Shopping cart</h1>
                    {
                        props.chart.length == 0 ?
                            <div className='text-center'>
                                <br /> <br /> <br />
                                <h2 className='text-dark'>Shopping Cart is Empty
                                </h2>
                                <i className="fas fa-shopping-cart fa-5x text-dark"></i>

                            </div>
                            : <MDBCol sm='12' className='text-center'>
                                <button className='btn bg-white' onClick={() => setLocalStorage()}>
                                    <i className="far fa-save"></i>&nbsp;
                                    Save Shopping Cart for later
                                </button>
                                {
                                    JSON.parse(localStorage.getItem('cart')) != null &&
                                    <button className='btn bg-white' onClick={() => deleteLocalStorage()}>
                                        delete saved
                                    </button>
                                }

                            </MDBCol>
                    }
                    <MDBRow>

                        {
                            !load && props.chart != undefined ? (

                                props.chart.map((p, index) => {
                                    console.log('chart data', p)
                                    // setCurrentPrice(() => p.sizes[0].price)
                                    let qnt;
                                    return (
                                        // <div className='container-fluid'>
                                        <>
                                            <MDBCol sm='2'>
                                                <h2 className='text-dark text-center counter'>{index + 1}</h2>
                                            </MDBCol>
                                            <MDBCol sm='10' className='text-left' style={{ margin: '15px auto' }}>
                                                <MDBCard className='text-center' key={p.id}>
                                                    <MDBRow>
                                                        <MDBCol sm='12' lg='6' className='productDetailsCard'>
                                                            <img className='cardImg' src={p.img} />

                                                        </MDBCol>
                                                        <MDBCol sm='12' lg='6' className='productDetailsCard'>
                                                            <h2 className='col-sm-12 text-dark'>{p.name}</h2>
                                                            <p className='col-sm-12'>{p.description}</p>
                                                            <div className='col-sm-8 text-left' >
                                                                {/* <b className='col-sm-6'>Price</b> */}
                                                                {/* <span className='col-sm-6' id='pr   ice'> ₪ {p.totalPrice}</span> */}
                                                                {/* <br /> */}
                                                                <b className='col-sm-8'>Size:</b>
                                                                {
                                                                    p.sizes.map((size, index) => {
                                                                        return <span>{size.selected && size.name}</span>
                                                                    })
                                                                }
                                                                <br />
                                                                <b className='col   -sm-8'>Price:</b>

                                                                {
                                                                    p.sizes.map((size, index) => {
                                                                        return <span>{size.selected ? qnt = size.price + ' ₪ ' : ''}</span>

                                                                    })
                                                                }
                                                                <br />
                                                                <b className='col-sm-8'>Quantity:</b>
                                                                <span>{p.quantity}</span>
                                                                <br />
                                                                <b className='col-sm-8'>Total Price:</b>
                                                                <span>{p.totalPrice} ₪ </span>
                                                            </div>
                                                            <br />
                                                            <button className='chartButton col-sm-10' onClick={() =>
                                                                history.push(p.id < 10 ? `/product/update/${p.id}` : p.id < 30 ? `/food/update/${p.id}` : `/desserts/update/${p.id}`)
                                                            }>
                                                                Update</button>
                                                            <button className='trashButton btn-danger col-sm-10'>
                                                                <span onClick={() => props.delete_chart_by_id(p.id)
                                                                }>
                                                                    Remove from cart</span>
                                                            </button>

                                                        </MDBCol>
                                                    </MDBRow>

                                                </MDBCard>

                                            </MDBCol>

                                        </>

                                        // </div>
                                    )
                                })

                            )
                                : ''
                            // <h4>Loading</h4>
                        }
                        {/* {
                            !load &&
                            <MDBRow>
                                <MDBCol className='text-center'>
                                    <MDBCard>
                                        <h2 className='text-dark'>Total is: {props.chart.reduce((b, c) => b.totalPrice + c.totalPrice)}</h2>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        } */}
                    </MDBRow>

                </MDBCard>

            </MDBContainer>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        chart: state.chartReducer.chart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            get_chart,
            delete_chart,
            delete_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartCom)


