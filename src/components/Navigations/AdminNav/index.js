import React, { Component } from 'react'

class AdminNav extends Component {
  render() {
    return (
      <React.Fragment>
              <ul className="asideList">
                <li><a href="" className="asideAnchor">My Account</a></li>
                <div className="dropdown">
                  <li><a href="" className="asideAnchor">Agents <span>&#187;</span> </a></li>
                  <div className="dropdown_content">
                    <a href="" className="asideAnchor">Add</a>
                    <a href="" className="asideAnchor">Review</a>
                  </div>
                </div>
                <div className="dropdown">
                  <li><a href="" className="asideAnchor">Community <span>&#187;</span> </a></li>
                  <div className="dropdown_content">
                    <a href="" className="asideAnchor">Update</a>
                    <a href="" className="asideAnchor">Review</a>
                  </div>
                </div>
                <li><a href="" className="asideAnchor">Customers</a></li>
              </ul>
      </React.Fragment>
    )
  }
}

export default AdminNav
