import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
// import Home from './pages/Home'
// import FoodPage from './pages/FoodPage';
// import DrinkPage from './pages/DrinkPage';
// import DesertPage from './pages/DesertPage';
// import Chart from './components/Chart/Chart';


import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

//Food
import AddFood from './components/Food/Add'
import UpdateFood from './components/Food/Update';

//Drinks
import Add from './components/Products/Add/Add'
import Update from './components/Products/Update/Update';

//Desserts
import AddDessert from './components/Dessert/AddDessert'
import UpdateDessert from './components/Dessert/UpdateDessert'

//Pages
const Home = React.lazy(() => import('./pages/Home'));
const FoodPage = React.lazy(() => import('./pages/FoodPage'));
const DrinkPage = React.lazy(() => import('./pages/DrinkPage'));
const DesertPage = React.lazy(() => import('./pages/DesertPage'));
const Chart = React.lazy(() => import('./components/Chart/Chart'));

function App() {
  return (
    <div className='rootBackround'>

      <Router>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>

            {/* pages */}
            <Route exact path="/" component={Home} />
            <Route exact path="/food/" component={FoodPage} />
            <Route exact path="/drinks/" component={DrinkPage} />
            <Route exact path="/desserts/" component={DesertPage} />
            <Route exact path="/cart" component={Chart} />

            {/* Drinks */}
            <Route exact path="/drinks/add/:productId" component={Add} />
            <Route exact path="/drinks/update/:productId" component={Update} />

            {/* Food */}
            <Route exact path="/food/add/:foodId" component={AddFood} />
            <Route exact path="/food/update/:foodId" component={UpdateFood} />

            {/* Dessert */}
            <Route exact path="/desserts/add/:dessertId" component={AddDessert} />
            <Route exact path="/desserts/update/:dessertId" component={UpdateDessert} />

          </Switch>
        </Suspense>

      </Router>

      <Footer />
    </div>

  );
}

export default App;
