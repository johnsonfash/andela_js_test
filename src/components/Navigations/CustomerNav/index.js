import React, { Component } from 'react'

class CustomerNav extends Component {
  render() {
    return (
      <React.Fragment>
              <ul className="asideList">
                <li><a href="" className="asideAnchor">My Account</a></li>
                <li><a href="" className="asideAnchor">Order</a></li>
                <li><a href="" className="asideAnchor">Donate</a></li>
                <li><a href="" className="asideAnchor">History</a></li>
                <li><a href="" className="asideAnchor">Support</a></li>
                <li><a href="" className="asideAnchor">About</a></li>
              </ul>
      </React.Fragment>
    )
  }
}

export default CustomerNav
