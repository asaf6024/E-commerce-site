import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
// import './add.css'
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Card from './../Card/Card';
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { add_to_chart, get_chart, update_chart_by_id } from '../../redux/chart/chart-actions';
import { getFoodById } from '../../redux/food/food-actions';

const Add = (props) => {
    let { foodId } = useParams();
    const history = useHistory()
    // let currentPrice = 10;
    const [currentPrice, setCurrentPrice] = useState(null)
    const [quantity, setQunatity] = useState(1)
    const [size, setSize] = useState('small')

    useEffect(() => {
        window.scroll(0, 0)
        props.getFoodById(foodId)
        props.get_chart()

    }, [])



    const addToChart = () => {

        let priceOfOrder = document.getElementById('size').value
        let copiedArray = [...props.food]
        let price = 0;

        copiedArray[0].sizes.forEach(s => {
            if (s.price == priceOfOrder) {
                s.selected = true;
                price = s.price
            }
            else
                s.selected = false
        });

        let obj = [
            {
                ...copiedArray[0],
                'quantity': quantity,
                'totalPrice': Number(quantity) * Number(price)
            }
        ]
        props.add_to_chart(obj)
        history.push(`../update/${foodId}`)

    }
    return (
        <div>

            {
                props.food.length > 0 && (
                    props.food.map(p => {
                        // setCurrentPrice(() => p.sizes[0].price)
                        return (
                            <div className='container-fluid'>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol sm='12' className='backBtn'>
                                            <span onClick={() => history.goBack()}>
                                                <i className="fas fa-long-arrow-alt-left"></i>&nbsp;
                                                Back to Food
                                            </span>
                                            <br />
                                        </MDBCol>
                                        <MDBCol sm='12'>
                                            <Card
                                                data={props.food}
                                                quantity={quantity}
                                                setQunatity={setQunatity}
                                                setCurrentPrice={setCurrentPrice}
                                                currentPrice={currentPrice}
                                                updateForChart={addToChart}
                                                productId={foodId}
                                            />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        )
                    })
                )

            }

        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        food: state.foodReducer.foo,
        chart: state.chartReducer.chart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getFoodById,
            add_to_chart,
            get_chart,
            update_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Add)


