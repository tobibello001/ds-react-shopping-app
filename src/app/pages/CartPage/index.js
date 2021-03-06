import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ProductItem from './components/ProductItem'

class CartPage extends Component {
    render() {
        const { cart, updateCart, removeFromCart } = this.props
        const totalCost = cart.reduce((total, item) => item.totalPrice + total, 0)
        if (cart.length === 0) {
            return (
                <section className="emty_cart_area p_100">
                    <div className="container">
                        <div className="emty_cart_inner">
                            <i className="icon-handbag icons"></i>
                            <h3>Your Cart is Empty</h3>
                            <h4>back to <Link to="/">shopping</Link></h4>
                        </div>
                    </div>
                </section>
            )
        }
        return (
            <section className="shopping_cart_area p_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart_items">
                                <h3>Your Cart Items</h3>
                                <div className="table-responsive-md">
                                    <table className="table">
                                        <tbody>
                                            {cart.map((item, index) => (
                                                <ProductItem
                                                    key={item.product.id}
                                                    id={item.product.id}
                                                    title={item.product.title}
                                                    price={item.totalPrice}
                                                    imageUrl={item.product.imageUrl}
                                                    quantity={item.quantity}
                                                    updateCart={(quantity) => updateCart(index, quantity)}
                                                    removeFromCart={() => removeFromCart(index)}
                                                />))}
                                            <tr>
                                                <th scope="row">
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart_totals_area">
                                <h4>Cart Totals</h4>
                                <div className="cart_t_list">
                                    <div className="media">
                                        <div className="d-flex">
                                            <h5>Subtotal</h5>
                                        </div>
                                        <div className="media-body">
                                            <h6>${Number.parseFloat(totalCost).toFixed(2)}</h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex">
                                            <h5>Shipping</h5>
                                        </div>
                                        <div className="media-body">
                                            <p>Free Shipping</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex">

                                        </div>
                                        <div className="media-body">
                                            <select className="selectpicker">
                                                <option>Calculate Shipping</option>
                                                <option>Calculate Shipping</option>
                                                <option>Calculate Shipping</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="total_amount row m0 row_disable">
                                    <div className="float-left">
                                        Total
                                </div>
                                    <div className="float-right">
                                        ${Number.parseFloat(totalCost).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                            <Link to="/checkout" className="btn subs_btn form-control">Proceed to checkout</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CartPage;
