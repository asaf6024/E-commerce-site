import { MDBCard, MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import React, { useState, useEffect, useSort } from 'react'
import { useHistory } from "react-router-dom";
import sort from '../dist/functions/sort'
import searchByText from '../dist/functions/serach';

const LoadData = (props) => {
    let history = useHistory()
    let disabled = 'disabled'
    const [data, setData] = useState([])
    const [dataStatic, setDataStatic] = useState([])
    useEffect(() => {

        props.get_chart()
        setData(props.data)
        setDataStatic(props.data)
    }, [])

    const loadData = data.map(product => {
        disabled = ''
        let classActive = ''
        props.chart.map(c => c.id == product.id ? classActive = 'active' : '')

        return <MDBCol lg='4' sm='12' className='text-center'>
            <MDBCard key={product.id} className={`productCard ${classActive}`}>
                <h3 className='font-italic'>{product.name}</h3>
                <img src={product.img} onClick={() => classActive != '' ? history.push(`/${props.typeOfProduct}/update/${product.id}`) : history.push(`/${props.typeOfProduct}/add/${product.id}`)} />
                <p className='productDescription'>{product.description}</p>
                <b className='productPrice'>{product.price} ₪</b>
                <button className='btn' onClick={() =>
                    classActive != '' ? history.push(`/${props.typeOfProduct}/update/${product.id}`) : history.push(`/${props.typeOfProduct}/add/${product.id}`)
                }>
                    {classActive != '' ? 'Update' : 'Buy'}
                </button>
                {classActive != '' ?
                    <>
                        <button className=' trashButton btn-danger'>
                            <span onClick={() => props.delete_chart_by_id(product.id)}>
                                Remove from Cart</span>
                        </button>
                    </>
                    : ''
                }
            </MDBCard>
        </MDBCol >
    })

    return (
        <div className="container-fluid loadDataDiv" id='food'>
            <MDBContainer>
                <h2 className='text-center font-weight-bold headlineOfProduct'>{props.typeOfProduct} <i className={`${props.icon}`}></i>
                </h2>
                {
                    !props.isHome &&
                    <MDBRow>
                        <MDBCol sm='12'>
                            <MDBCard>
                                <MDBCol sm='12'>
                                    <label className="col-lg-2 col-sm-6">Sort</label>
                                    <select className="col-lg-2 col-sm-6" id='sort' title="sort" disabled={disabled} onChange={(e) =>
                                        // sortData(e)
                                        setData(sort(e.target.value, data))
                                    }>
                                        <option value='0'></option>
                                        <option value="1">Price high to low</option>
                                        <option value="2">Price low to high</option>
                                    </select>
                                    <input type="search"
                                        title='filter'
                                        style={{ display: 'initial', margin: 'auto' }}
                                        className="col-lg-8 col-sm-12 text-center form-control"
                                        placeholder="Type to search"
                                        onChange={e => {
                                            setData(sort(document.getElementById('sort').value, searchByText(e.target.value, dataStatic)))
                                        }
                                        }>
                                    </input>
                                </MDBCol>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                }

                <MDBRow>
                    {
                        props.data != undefined &&
                        loadData
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    )
}


export default LoadData

