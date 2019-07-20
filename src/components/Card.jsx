import React from 'react';
import {Link} from 'react-router-dom';
class Card extends React.Component {

    render() {
        debugger
        const { category, details, image, isFavourite, name, price, rating, reviews } = this.props;
        
        return (
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                    {/* <span className="card-title">{name}</span>
                    <span className="card-title">{price}</span> */}
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light">
                    {/* <i className="material-icons" onClick={() => addToCart(this.props)}>add</i> */}
                    <i className="material-icons" >add</i>
                    </span>
                </div>
                <div className="card-content">
                    <p>
                    <Link to={`/dish-details/${name}`} ><b>{name}</b></Link>
                    <br />
                    <b>Price: {price}</b>
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;