import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { useHistory } from "react-router-dom";
import './card.css'
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { delete_chart_by_id } from '../../redux/chart/chart-actions';

const Card = (props) => {
    const history = useHistory()

    useEffect(() => {
        // console.log('data', props.data)
        props.isUpdate &&
            props.setQunatity(null)

        // console.log('props.quantity', props.quantity)
    }, [])

    return (
        props.data != undefined &&
        props.data.map(p => {

            return p.id != props.productId && props.isUpdate ?
                ''

                // setCurrentPrice(() => p.sizes[0].price)
                : (

                    <MDBCard className='text-center productDetailsCard' key={p.id}>
                        <MDBRow className='rowOfProduct'>
                            <MDBCol sm='12' lg='6'>
                                <img className='cardImg' src={`../${p.img}`} />

                            </MDBCol>
                            <MDBCol sm='12' lg='6' key={p.id} id='idOfCard'>
                                <h1 className='col-sm-12 text-dark'>{p.name}</h1>
                                <p className='col-sm-12'>{p.longDescription}</p>
                                <div className='col-sm-8 text-left' >
                                    <b className='col-sm-6'>Price:</b>
                                    <span className='col-sm-6' id='price'>
                                        {
                                            !props.isUpdate ?
                                                props.quantity != 1 ? (props.currentPrice != null ? props.currentPrice : p.price) * props.quantity
                                                    : props.currentPrice != null ? props.currentPrice : p.sizes[0].price

                                                : props.currentPrice != null ?
                                                    props.currentPrice * (props.quantity != null ? props.quantity : p.quantity)
                                                    : props.quantity != null ? props.quantity * (p.totalPrice / p.quantity)
                                                        : p.totalPrice

                                        } ₪</span>
                                    <span></span>
                                    <br /><br />
                                    <b className='col-sm-8'>Size:</b>
                                    <br />
                                    <select
                                        id='size'
                                        // onChange={(e) => setChosenProduct(e, p.id)}
                                        onChange={e => {
                                            props.setCurrentPrice(e.target.value)
                                        }}
                                    >
                                        {
                                            p.sizes.map((size, index) => {
                                                return <option selected={size.selected && 'selected'} value={size.price} name={size.name} id={size.price}>
                                                    {size.name}
                                                </option>
                                            })
                                        }
                                    </select>
                                    <br /><br />
                                    <b className='col-sm-8'>Quantity:</b> <br />
                                    <input type='number' min='1' max='20' id='quantity' defaultValue={props.isUpdate ? p.quantity : props.quantity} onChange={(e) => props.setQunatity(e.target.value)}></input>
                                    {/* <select id='quantity' onChange={(e) => props.setQunatity(e.target.value)}>
                                        <option selected={p.quantity == 1 && 'selected'} value={"1"}>1</option>
                                        <option selected={p.quantity == 2 && 'selected'} value="2">2</option>
                                        <option selected={p.quantity == 3 && 'selected'} value="3">3</option>
                                        <option selected={p.quantity == 4 && 'selected'} value="4">4</option>
                                    </select> */}

                                </div>
                                <br />
                                <p>{props.messege}</p>
                                <div className='updateButtons'>

                                    <button className='chartButton col-sm-10' onClick={() => {
                                        props.updateForChart()
                                    }
                                    }>
                                        <span>{props.isUpdate ? 'Update' : 'Add to Shopping cart'}</span>
                                    </button>
                                    {/* {console.log('p.totalPrice', props.chart)} */}
                                    {props.isUpdate && props.chart.length > 0 &&
                                        < button className=' trashButton btn-danger col-sm-10' onClick={(e) => {
                                            props.delete_chart_by_id(props.productId).then(() => {
                                                history.push(`../add/${p.id}`)
                                            })
                                        }
                                        }>
                                            <span >
                                                Remove from cart</span>
                                        </button>
                                    }
                                </div>
                            </MDBCol>
                        </MDBRow>

                    </MDBCard >


                )
        })
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

            delete_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)
