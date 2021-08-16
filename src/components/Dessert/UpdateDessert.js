import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
// import './add.css'
import { useHistory } from "react-router-dom";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Card from '../Card/Card';
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get_chart_by_id, update_chart_by_id, delete_chart_by_id } from '../../redux/chart/chart-actions';
import { getDessertById } from '../../redux/desserts/desserts-actions'

const UpdateDessert = (props) => {
    let { dessertId } = useParams();
    const history = useHistory()
    // let currentPrice = 10;
    const [currentPrice, setCurrentPrice] = useState(null)
    const [quantity, setQunatity] = useState(1)
    useEffect(() => {
        window.scroll(0, 0)
        props.getDessertById(dessertId)
        props.get_chart_by_id(dessertId)

    }, [])
    useEffect(() => {
        // console.log('chart is', props.chart)

    }, [])


    const updateForChart = () => {
        let priceOfOrder = document.getElementById('size').value
        let copiedArray = [...props.desserts]
        let price = 0;
        // console.log('price element', document.getElementById('quantity').value)

        // console.log('quantity', quantity)
        copiedArray.map(copied => {

            copied.quantity = quantity;
            copied.totalPrice = Number(quantity) != undefined ? Number(quantity) * Number(priceOfOrder) : 1 * Number(priceOfOrder);
            copied.price = priceOfOrder

            copied.sizes.forEach(s => {
                if (s.price == priceOfOrder) {
                    s.selected = true;
                    price = s.price
                }
                else
                    s.selected = false
            });

        })
        // copiedArray[0].sizes.forEach(s => {
        //     if (s.price == priceOfOrder) {
        //         s.selected = true;
        //         price = s.price
        //     }
        //     else
        //         s.selected = false
        // });

        let obj = [
            {
                ...copiedArray[0]
                // 'quantity': quantity,
                // 'totalPrice': Number(quantity) != undefined ? Number(quantity) * Number(priceOfOrder) : 1 * Number(priceOfOrder),
                // 'price': priceOfOrder
            }
        ]

        // console.log('obj', obj)
        update_chart_by_id(obj)
    }
    const setQunatityForUpdate = (qnt) => {
        setQunatity(qnt)
    }

    return (
        <div>
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
                            {
                                <Card
                                    isUpdate={true}
                                    productId={dessertId}
                                    data={props.chart}
                                    quantity={quantity}
                                    setQunatity={setQunatityForUpdate}
                                    setCurrentPrice={setCurrentPrice}
                                    currentPrice={currentPrice}
                                    updateForChart={updateForChart}
                                    delete_chart_by_id={delete_chart_by_id}
                                />
                            }

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

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
            get_chart_by_id,
            update_chart_by_id,
            delete_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDessert)


