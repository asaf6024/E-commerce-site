import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBAnimation } from 'mdbreact'
const Landing = () => {
    return (
        <div className='container-fluid'>
            <MDBAnimation type="fadeIn" delay="1s" className="text-center" data-mdb-animation-start="onHover">


                <MDBRow>
                    <MDBCol sm='12' lg='8' style={{ margin: 'auto' }}>
                        <MDBCard style={{ minHeight: '70vh' }}>
                            <div className='text-center' style={{ margin: 'auto' }}>
                                <h1 className='font-weight-bold text-dark'>Welcome to a demo of <br />E-commerce site:<br />
                                </h1>
                                <br />
                                <h2 className='font-weight-bold text-dark'>coffee shop</h2>
                                <i className="fas fa-mug-hot fa-5x text-dark"></i>
                                <br />
                                <br />
                                <p className='text-dark h3'>Please choose your products below </p>
                                <a className='text-dark' href='/#food'><i className="fas fa-arrow-down fa-3x text-dark" ></i></a>
                            </div>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBAnimation>

        </div>
    )
}
export default Landing