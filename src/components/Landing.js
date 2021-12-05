import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBAnimation } from 'mdbreact'
const Landing = () => {
    return (
        <div className='container-fluid'>
            <MDBAnimation type="fadeIn" delay="1s" className="text-center" data-mdb-animation-start="onHover">


                <MDBRow>
                    <MDBCol sm='12' lg='8' style={{ margin: 'auto' }}>
                        <MDBCard style={{ minHeight: '70vh', backgroundColor: 'rgb(255 255 255 / 20%)' }}>
                            <div className='text-center' style={{ margin: 'auto' }}>
                                <i className="fas fa-mug-hot fa-7x text-white"></i>
                                <br />
                                <br />

                                <h1 className='font-weight-bold text-white'>Coffee shop <br />
                                </h1>
                                <br />
                                <h2 className='font-weight-bold text-white' style={{ textTransform: "initial" }}>
                                    My E-commerce site
                                </h2>

                                {/* <p className='text-dark h3'>Please choose your products below </p> */}
                                <a className='text-dark' href='/#food'><i className="fas fa-angle-down fa-3x text-white" ></i></a>
                            </div>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBAnimation>

        </div>
    )
}
export default Landing