import React, { Component } from 'react'
import { connect } from 'react-redux';
import CartResult from './../components/CartResult';
import CartList from './../components/CartList';
import CartItem from './../components/CartItem';
import * as actions from './../actions/index';
class CartContainer extends Component {
    render() {
        return (
            <CartList>
                {this.showCartItem(this.props.cartList)}
                {this.showCartResult(this.props.cartList)}
            </CartList>

        );
    }
    showCartItem(cartList) {
        var result = 'No product in cart.';
        if (cartList.length > 0) {
            result = cartList.map((item, index) => {
                return <CartItem key={item.id} cart={item} deleteCart={this.props.deleteCart} updateCart={this.props.updateCart}/>
            });
        }
        return result;
    }
    showCartResult(cartList) {
        return <CartResult cartList={cartList} />
    }
}
const mapStateToProps = (state) => {
    return {
        cartList: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (id) => {
            dispatch(actions.deleteCart(id))
        },
        updateCart: (id, currentQuantity) => {
            dispatch(actions.updateCart(id, currentQuantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
