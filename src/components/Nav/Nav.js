import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap'
import { useHistory } from 'react-router'
// import { a } from "react-router-dom";
import './nav.css'

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get_chart } from '../../redux/chart/chart-actions';

const NavPage = (props) => {
    let history = useHistory()
    const [active, setACtive] = useState('activea')
    const [bgDark, setBgDark] = useState(`inherit`)
    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        setACtive('home')

        props.get_chart()
        // if (window.scrollY > 20)
        //     document.getElementById('navBar').style.background = '#212529'
    })

    const handleScroll = () => {
        if (window.scrollY > 40) {
            setBgDark('#212529')
            document.querySelector('.navItem').style.textShadow = 'none'
        } else {
            setBgDark(`inherit`)
        }
    };

    const setActiveNav = (target, nav) => {
        const el = document.querySelector('.activeLink');
        try {
            if (el.classList.contains("activeLink")) {
                el.classList.remove("activeLink");
            }
        } catch (error) {

        }


        document.getElementById(nav).classList.add('activeLink')
        history.push(target)

    }

    return (
        <Navbar variant="dark" style={{ background: bgDark }} expand="lg" className='col-sm-12' id='navBar'>
            {/* <Container > */}
            {/* <Navbar.Brand href="/" className='col-sm-1'>My Portfolio</Navbar.Brand> */}
            <Navbar.Brand href="/" className='col-sm-12 col-lg-1 font-weight-bold titleOfNav'>E-commerce site</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example" className='col-sm-12 col-lg-9 text-center'>
                <Nav >
                    <NavItem className='activeNav navItem' onClick={(e) => setActiveNav('/', 'landingNavItem')}>
                        <span id='landingNavItem'> Home</span>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem className='activeNav navItem' onClick={(e) => history.push('/food')} onClick={(e) => setActiveNav('/food', 'foodItem')}>
                        <span id='foodItem' > Food</span>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem className='activeNav navItem' onClick={(e) => setActiveNav('/drinks', 'drinksItem')}>
                        <span id='drinksItem' > Drinks</span>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem className='activeNav navItem' onClick={(e) => setActiveNav('/desserts', 'dessertsItem')}>
                        <span id='dessertsItem' > Desserts</span>
                    </NavItem>


                </Nav>
            </Navbar.Collapse>

            <Navbar.Brand className='col-sm-2'>


                {/* < a href="/chart" className='col-sm-1 navFonts' title='Shoping Cart' > */}
                <span className="badge badge-pill red">{props.chart.length}</span>
                <i className="fas fa-shopping-cart navItem" onClick={(e) => history.push('/cart')}></i>
                {/* </a> */}
            </Navbar.Brand>
            {/* </Container> */}
        </Navbar >
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
            get_chart,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavPage)