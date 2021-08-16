import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
// import './add.css'
import { useHistory } from "react-router-dom";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Card from '../../Card/Card';
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductById } from '../../../redux/products/products-actions';
import { get_chart_by_id, update_chart_by_id, delete_chart_by_id } from '../../../redux/chart/chart-actions';

const Update = (props) => {
    let { productId } = useParams();
    const history = useHistory()
    // let currentPrice = 10;
    const [currentPrice, setCurrentPrice] = useState(null)
    const [quantity, setQunatity] = useState(1)
    useEffect(() => {
        // props.getProductById(productId)
        props.get_chart_by_id(productId)

    }, [])
    useEffect(() => {
        // console.log('chart is', props.chart)

    }, [])


    const updateForChart = () => {
        let priceOfOrder = document.getElementById('size').value
        let copiedArray = [...props.product]
        let price = 0;
        console.log('price element', document.getElementById('quantity').value)

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

        console.log('obj', obj)
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
                            <span onClick={() => history.push('/')}>
                                <i className="fas fa-long-arrow-alt-left"></i>&nbsp;
                                Back to Drinks
                            </span>
                        </MDBCol>
                        <MDBCol sm='12'>
                            {
                                <Card
                                    isUpdate={true}
                                    productId={productId}
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
        product: state.productsReducer.product,
        chart: state.chartReducer.chart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getProductById,
            get_chart_by_id,
            update_chart_by_id,
            delete_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Update)


