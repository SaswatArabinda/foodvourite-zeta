import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import DishDetailsPage from './components/DishDetailsPage';
import axios from 'axios';
import Favourties from './components/Favourites';

class App extends Component {

  render() {
    return (
      <BrowserRouter saswat={'sas'}>
        <div className="App">
          
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={Home}
              render={(props) => <Home {...props} saswat={"arabinda"} isAuthed={true} />} /> */}

            <Route path="/dish-details/:itemName" component={DishDetailsPage} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;