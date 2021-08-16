import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Add from './components/Products/Add/Add'
import AddFood from './components/Food/Add'
import Chart from './components/Chart/Chart';
import { MDBContainer } from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Update from './components/Products/Update/Update';
import UpdateFood from './components/Food/Update';
import FoodPage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';
import DesertPage from './pages/DesertPage';
import AddDessert from './components/Dessert/AddDessert'
import UpdateDessert from './components/Dessert/UpdateDessert'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          {/* pages */}
          <Route exact path="/" component={Home} />
          <Route exact path="/food/" component={FoodPage} />
          <Route exact path="/drinks/" component={DrinkPage} />
          <Route exact path="/desserts/" component={DesertPage} />
          {/* Drinks */}
          <Route exact path="/product/add/:productId" component={Add} />
          <Route exact path="/product/update/:productId" component={Update} />
          <Route exact path="/chart" component={Chart} />

          {/* Food */}
          <Route exact path="/food/add/:foodId" component={AddFood} />
          <Route exact path="/food/update/:foodId" component={UpdateFood} />

          {/* Dessert */}
          <Route exact path="/desserts/add/:dessertId" component={AddDessert} />
          <Route exact path="/desserts/update/:dessertId" component={UpdateDessert} />

        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
