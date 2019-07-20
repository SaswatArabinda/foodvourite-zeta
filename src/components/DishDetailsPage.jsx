import React from 'react';
import axios from 'axios';

class DishDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.itemName = this && this.props && this.props.match && this.props.match.params && this.props.match.params.itemName ? this.props.match.params.itemName : '';
        this.state = {
            recipes: [],
            categories: []
        }
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
        let paramName = this.itemName
        let selectedItem = recipes.filter(function(item){return (item.name === paramName) ? true: false})
        
        let name = selectedItem && selectedItem[0] && selectedItem[0].name ? selectedItem[0].name : '';
        let details = selectedItem && selectedItem[0] && selectedItem[0].details ? selectedItem[0].details : '';
        let price = selectedItem && selectedItem[0] && selectedItem[0].price ? selectedItem[0].price : '';
        let rating = selectedItem && selectedItem[0] && selectedItem[0].rating ? selectedItem[0].rating : '';
        let category = selectedItem && selectedItem[0] && selectedItem[0].category ? selectedItem[0].category : '';
        let image = selectedItem && selectedItem[0] && selectedItem[0].image ? selectedItem[0].image : '';
        let reviews = selectedItem && selectedItem[0] && selectedItem[0].reviews ? selectedItem[0].reviews : '';
        
        return (
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light">
                        <i className="material-icons" >add</i>
                    </span>
                </div>
                <div className="card-content">
                    <div>
                        <span style={{ 'color': '#aab5c1', 'float': 'left' }}>Category: {category}</span>
                        <span style={{ 'color': '#aab5c1', 'float': 'right' }}>{rating} Ratings ({reviews} Reviews)</span>

                    </div>
                    <br />
                    <br />
                    <p>
                        <b>{name}</b>
                        <br />
                        <b>Price: {price}</b>
                        <p>{details}</p>
                    </p>
                </div>
            </div >
        )
    }
}

export default DishDetailsPage;