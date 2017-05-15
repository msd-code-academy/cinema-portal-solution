import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HeaderMenu from './../containters/HeaderMenu';
import MovieList from './../containters/MovieList';
import MovieDetail from './../containters/MovieDetail';
import Checkout from './../containters/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMenu />
        <Route exact path='/' component={MovieList}/>
        <Route path='/checkout' component={Checkout} />
        <Route path='/movies/:id' component={MovieDetail} />
      </div>
    );
  }
}

export default App;