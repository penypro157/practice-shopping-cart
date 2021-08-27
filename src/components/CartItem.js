import React, { Component } from 'react'
class CartItem extends Component {
    
    subTotal(price, quantity) {
        return price * quantity;
    }
    deleteCart = (id) => {
        this.props.deleteCart(id);
    }
    updateCart = (id, currentQuantity) => {
        this.props.updateCart(id, currentQuantity);
    }
    render() {
        var { cart } = this.props;
        return (

            <tr>
                <th scope="row">
                    <img src={cart.product.imgUrl}
                        alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary 
                        btn-rounded waves-effect waves-light" onClick={() => this.updateCart(cart.product.id, cart.quantity - 1)}>
                            <a >—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light" onClick={() => this.updateCart(cart.product.id, cart.quantity + 1)}>
                            <a >+</a>
                        </label>
                    </div>
                </td>
                <td>{this.subTotal(cart.product.price, cart.quantity)}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={() => this.deleteCart(cart.product.id)}>
                        X
                    </button>
                </td>
            </tr>

        );
    }
}

export default CartItem;
