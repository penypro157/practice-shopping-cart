import React, { Component } from 'react'
import { connect } from 'react-redux';
import Message from './../components/Message'
import * as message from './../constants/message'
class MessageContainer extends Component {
    render() {
        return (
            <Message message={this.showMessage(this.props.cartList)} />
        );
    }
    showMessage(cartList) {
        var total = 0;
        cartList.map((item) => {
            total += item.quantity;
        });
        if (total > 0) {
            return message.MSG_ADD_SUCCESS;
        } else {
            return message.MSG_WELCOME;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        message: state.message,
        cartList: state.cart
    }
}
export default connect(mapStateToProps, null)(MessageContainer);
