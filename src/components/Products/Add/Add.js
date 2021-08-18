import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './add.css'
import { useHistory } from "react-router-dom";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Card from '../../Card/Card';
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductById } from '../../../redux/products/products-actions';
import { add_to_chart, get_chart, update_chart_by_id } from '../../../redux/chart/chart-actions';

const Add = (props) => {
    let { productId } = useParams();
    const history = useHistory()
    // let currentPrice = 10;
    const [currentPrice, setCurrentPrice] = useState(null)
    const [productToBuy, setProductToBuy] = useState(null)
    const [quantity, setQunatity] = useState(1)
    const [size, setSize] = useState('small')
    useEffect(() => {
        window.scroll(0, 0)
        props.getProductById(productId)
        props.get_chart()

    }, [])

    useEffect(() => {
        setProductToBuy(props.product)

    })

    const setChosenProduct = (e, id) => {
        setCurrentPrice(e.target.value)
        let chosen = [...props.product]


        chosen[0].sizes.map((s, index) => {
            if (s.selected)
                s.selected = false

            if (index + 1 == id)
                s.selected = true
        })
        // console.log(chosen[0].sizes)

    }

    const addToChart = () => {

        let priceOfOrder = document.getElementById('size').value
        let copiedArray = [...props.product]
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
        props.add_to_chart(obj).then(() => {
            history.push(`../update/${productId}`)

        })

    }
    return (
        <div>

            {
                props.product.length > 0 && (
                    props.product.map(p => {
                        // setCurrentPrice(() => p.sizes[0].price)
                        return (
                            <div className='container-fluid'>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol sm='12' className='backBtn'>
                                            <span onClick={() => history.goBack()}>
                                                <i className="fas fa-long-arrow-alt-left"></i>&nbsp;
                                                Back to Drinks
                                            </span>
                                        </MDBCol>
                                        <MDBCol sm='12'>
                                            <Card
                                                data={props.product}
                                                quantity={quantity}
                                                setQunatity={setQunatity}
                                                setCurrentPrice={setCurrentPrice}
                                                currentPrice={currentPrice}
                                                updateForChart={addToChart}
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
        product: state.productsReducer.product,
        chart: state.chartReducer.chart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getProductById,
            add_to_chart,
            get_chart,
            update_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Add)


