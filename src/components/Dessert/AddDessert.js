import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
// import './add.css'
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Card from './../Card/Card';
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { add_to_chart, get_chart, update_chart_by_id } from '../../redux/chart/chart-actions';
import { getDessertById } from '../../redux/desserts/desserts-actions'

const AddDessert = (props) => {
    let { dessertId } = useParams();
    const history = useHistory()
    // let currentPrice = 10;
    const [currentPrice, setCurrentPrice] = useState(null)
    const [quantity, setQunatity] = useState(1)
    const [size, setSize] = useState('small')

    useEffect(() => {
        props.getDessertById(dessertId)
        props.get_chart()

    }, [])



    const addToChart = () => {

        let priceOfOrder = document.getElementById('size').value
        let copiedArray = [...props.desserts]
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
        history.push(`../update/${dessertId}`)

    }
    return (
        <div>

            {
                props.desserts.length > 0 && (
                    props.desserts.map(p => {
                        // setCurrentPrice(() => p.sizes[0].price)
                        return (
                            <div className='container-fluid'>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol sm='12' className='backBtn'>
                                            <span onClick={() => history.push('/desserts')}>
                                                <i className="fas fa-long-arrow-alt-left"></i>&nbsp;
                                                Back to Desserts
                                            </span>
                                        </MDBCol>
                                        <MDBCol sm='12'>
                                            <Card
                                                data={props.desserts}
                                                quantity={quantity}
                                                setQunatity={setQunatity}
                                                setCurrentPrice={setCurrentPrice}
                                                currentPrice={currentPrice}
                                                updateForChart={addToChart}
                                                productId={dessertId}
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
        desserts: state.desertsReducer.dessert,
        chart: state.chartReducer.chart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getDessertById,
            add_to_chart,
            get_chart,
            update_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDessert)


