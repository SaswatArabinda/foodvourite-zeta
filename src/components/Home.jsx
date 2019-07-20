import React from 'react';
import Card from './Card';
import axios from 'axios';
import Favourties from './Favourites';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            arrItemsInCart: [],
            recipes: [],
            categories: []
        }
    }

    addToCart(item) {
        this.setState((state, props) => {
            state.arrItemsInCart.push(item.id)
            return { arrItemsInCart: state.arrItemsInCart.sort() }
        })
    }

    componentDidMount() {
        var self = this;
        axios.get('http://temp.dash.zeta.in/food.php')
            .then(function (response) {
                let categories = response && response.data && response.data.categories ? response.data.categories : '';
                let recipes = response && response.data && response.data.recipes ? response.data.recipes : '';

                self.setState({
                    categories,
                    recipes
                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    render() {
        let { recipes } = this.state;

        return (
            <div className="container">
                <h4 className="center">Favourites</h4>
                <Favourties {...this.state} />
                <h4 className="center">All items</h4>
                <div className="box">
                    {recipes.map((item, i) => {
                        return (
                            <Card key={item.name} {...item} />
                        )
                    }
                    )}
                </div>
            </div>);
    }
}

export default Home;