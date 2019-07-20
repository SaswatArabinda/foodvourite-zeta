import React from 'react';
import { Route, Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <ul className="left">
                        <li>
                            <Route path="/dish-details/:itemName" render={() => <Link to="/"><h4>&larr;</h4></Link>} />
                        </li>
                    </ul>
                    <a className="brand-logo" href="/">Best Food App</a>
                    <ul className="right">
                        <li>
                            <a href="/cart"><i className="material-icons">shopping_cart</i></a>
                        </li>
                    </ul>
                </div>
            </nav>);
    }
}

export default Navbar;