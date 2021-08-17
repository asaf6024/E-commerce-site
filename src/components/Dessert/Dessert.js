import { MDBCard, MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import React, { useState, useEffect } from 'react'
// import './products.css'
import { useHistory } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDesserts } from '../../redux/desserts/desserts-actions'
import { get_chart, delete_chart_by_id } from '../../redux/chart/chart-actions';
import sort from '../../dist/functions/sort'
import searchByText from '../../dist/functions/serach';
import LoadData from '../LoadData';

const Desert = (props) => {
    let history = useHistory()
    const [data, setData] = useState([])
    let disabled = 'disabled'
    const [dataStatic, setDataStatic] = useState([])

    useEffect(() => {
        props.get_chart()
        setData(props.desserts)
        setDataStatic(props.desserts)
    }, [])

    // const loadDesserts = data.map(product => {
    //     let classActive = ''
    //     disabled = ''
    //     props.chart.map(c => c.id == product.id ? classActive = 'active' : '')
    //     // { console.log('product', product) }

    //     return <MDBCol lg='4' sm='12' className='text-center'>
    //         <MDBCard key={product.id} className={`productCard ${classActive}`}>
    //             <h3 className='font-italic'>{product.name}</h3>
    //             <img src={product.img} onClick={() => classActive != '' ? history.push(`/desserts/update/${product.id}`) : history.push(`/desserts/add/${product.id}`)} />
    //             {/* <i className="fas fa-info-circle fa-2x" title='info'
    //                 onClick={() => history.push(`/product/${product.id}`)}
    //             ></i> */}
    //             <p className='productDescription'>{product.description}</p>
    //             <b className='productPrice'>{product.price} ₪</b>
    //             <button className='btn' onClick={() =>
    //                 classActive != '' ? history.push(`/desserts/update/${product.id}`) : history.push(`/desserts/add/${product.id}`)
    //             }>
    //                 {classActive != '' ? 'Update' : 'Buy'}
    //             </button>
    //             {classActive != '' ?
    //                 <>
    //                     {/* <button className=' chartButton'>
    //                         <span onClick={() => history.push(`/chart`)}>In Shopping cart</span>
    //                     </button> */}
    //                     <button className=' trashButton btn-danger'>
    //                         <span onClick={() => props.delete_chart_by_id(product.id)}>
    //                             Remove from Cart</span>
    //                     </button>
    //                 </>
    //                 : ''
    //             }

    //         </MDBCard>
    //     </MDBCol >

    // })


    return (
        // <div className="container-fluid" id='desserts'>
        //     <MDBContainer>
        <>
            {/* <h2 className='text-center font-weight-bold headlineOfProduct'>Desserts <i className="fas fa-ice-cream"></i></h2> */}
            {/* <a href='/#drinks'>
                    <i className="fas fa-arrow-down DownArrow fa-2x"></i>
                </a> */}
            {/* {
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
                                        onChange={e =>
                                        //  filterByText(e){
                                        {
                                            setData(sort(document.getElementById('sort').value, searchByText(e.target.value, dataStatic)))

                                            // sort(document.getElementById('sort').value, data)

                                        }
                                        }>
                                    </input>
                                </MDBCol>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                } */}
            <MDBRow>
                {
                    props.desserts != undefined &&
                    <>
                        <LoadData
                            data={props.desserts}
                            get_chart={get_chart}
                            chart={props.chart}
                            typeOfProduct={'desserts'}
                            icon={'fas fa-ice-cream'}
                            delete_chart_by_id={props.delete_chart_by_id}
                            isHome={props.isHome}
                        />

                        {/* loadDesserts */}
                    </>

                    // loadProducts
                }
                {/* {
                        loadDesserts
                    } */}
            </MDBRow>
        </>

    )
}
const mapStateToProps = (state) => {
    return {
        desserts: state.desertsReducer.desserts,
        chart: state.chartReducer.chart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getDesserts,
            get_chart,
            delete_chart_by_id
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Desert)

