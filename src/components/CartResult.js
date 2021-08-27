import React, { Component } from 'react'
class CartResult extends Component {
    render() {
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(this.props.cartList)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>

        );
    }
    showTotalAmount(cartList) {
        var total = 0;
        for (var item of cartList) {
            total += item.quantity * item.product.price;
        }
        return total;
    }
}

export default CartResult;
