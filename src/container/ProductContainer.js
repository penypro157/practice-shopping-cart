import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import Product from '../components/Product';
import * as actions from '../actions/index';
class ProductContainer extends Component {
    render() {
        return (
            <ProductList >
                {this.showProductList(this.props.productList)}
            </ProductList>
        );
    }
    showProductList(productList) {
        return productList.map((item, index) => { return <Product key={item.id} product={item} changeMessage={this.props.changeMessage} addToCart={this.props.addToCart} /> })
    }
}
const mapStateToProps = (state) => {
    return {
        productList: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => { dispatch(actions.addToCart(product, 1)) },
        changeMessage: (message) => { dispatch(actions.changeMessage(message)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
