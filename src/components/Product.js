import React, { Component } from 'react'
import * as message from './../constants/message'
class Product extends Component {
    showRating(rating) {
        var result = [];
        for (var i = 0; i < rating; i++) {
            result.push(<li key={i}>
                <i className="fa fa-star"></i>
            </li>);
        }
        for (var j = rating; j < 5; j++) {
            result.push(<li key={j}>
                <i className="fa fa-star-o"></i>
            </li>);
        }
        return result;
    }
    addToCart = (product) => {
        this.props.addToCart(product);
        this.props.changeMessage(message.MSG_ADD_SUCCESS);
    }
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={this.props.product.imgUrl}
                            className="img-fluid" alt={this.props.product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{this.props.product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(this.props.product.rating)}
                        </ul>
                        <p className="card-text">
                            {this.props.product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{this.props.product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" onClick={() => this.addToCart(this.props.product)} data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;
