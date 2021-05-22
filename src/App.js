import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <>
            <Navbar> 
            <Route exact path="/beers" component={Beers}/>
            <Route exact path="/beers/:id" component={SingleBeer}/>
            <Route exact path="/random-beer" component={RandomBeer}/>
            <Route exact path="/new-beer" component={NewBeer}/>
            </Navbar>
          </>
        </Switch>
      </div>
      )
  }
}

export default App;