import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { useHistory } from "react-router-dom";
import './card.css'
const Card = (props) => {
    const history = useHistory()

    useEffect(() => {
        console.log('data', props.data)
        props.isUpdate &&
            props.setQunatity(null)

        console.log('props.quantity', props.quantity)
    }, [])

    return (
        props.data != undefined &&
        props.data.map(p => {

            return p.id != props.productId && props.isUpdate ?
                ''

                // setCurrentPrice(() => p.sizes[0].price)
                : (

                    <MDBCard className='text-center productDetailsCard' key={p.id}>
                        <MDBRow>
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
                                <div className='updateButtons'>

                                    <button className='chartButton col-sm-10' onClick={() => {
                                        props.updateForChart()
                                    }
                                    }>
                                        <span>{p.totalPrice != null ? 'Update' : 'Add to Shopping cart'}</span>
                                    </button>
                                    {p.totalPrice != null &&
                                        <button className=' trashButton btn-danger col-sm-10'>
                                            <span onClick={() => {
                                                props.delete_chart_by_id(p.id)
                                                history.push(`../add/${p.id}`)
                                            }
                                            }>
                                                Remove from cart</span>
                                        </button>
                                    }
                                </div>
                            </MDBCol>
                        </MDBRow>

                    </MDBCard>


                )
        })
    )
}
export default Card