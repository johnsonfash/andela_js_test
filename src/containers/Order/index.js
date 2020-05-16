import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import bag from '../../assets/garbage_bag.jpg'

class Order extends Component {
  render() {
    return (
      <React.Fragment>

        <Dashboard>
          <div className="order_content">
            <div className="bag">
              <p className="bag-head"><span className="uppercase">Your Bag</span> - 1 item</p>
            </div>
            <div className="bag-product">
              <div className="image">
                <img src={bag} className="product-image" />
              </div>
              <div className="description">
                <p className="muted">Order code: SS022592000</p>
                <span className="h1">Waste Bag Pickup</span>
                <p>type: Standard plastic bag</p>
                <p className="description-text">Please select your waste amount according to the Standard plastic bag in the description.</p>
                <p>bag size: 0.5m x 0.5m</p>
                <p>bag size: 0.5m x 0.5m</p>
                <span className="h1">₦825.00</span>
                <div className="quantity-wrapper">
                  <div>
                    <span className="h2">Quantity:</span>
                    <span className="h2"> x1</span>
                    <span className="incremento">
                      <button type="button" name="button" className="but">	&minus;</button>
                      <button type="button" name="button" className="but">&#43;</button>
                    </span>
                  </div>
                  <button className="btn-remove uppercase">reset</button>
                </div>
                <div className="quantity-wrapper">
                  <div>
                    <label htmlFor="time" className="h2">Date:</label>
                    <input type="date" id="time" max="2030-12-30" min="2020-01-01" pattern="\d{4}-\d{2}-\d{2}" className="date"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bag-total">
              <div className="subtotal">
                <p className="small">Subtotal:</p>
                <p className="small">₦825.00</p>
              </div>
              <div className="delivery">
                <p className="small">Pickup (Standard - 8 working days):</p>
                <p className="small">Free</p>
              </div>
              <hr/>
              <div className="total">
                <h3>Total:</h3>
                <h3>₦825.00</h3>
              </div>
              <button className="btn-go-checkout uppercase"> <a href="#">Checkout</a>
              </button>
            </div>
          </div>


        </Dashboard>

      </React.Fragment>
    )
  }
}

export default Order
