import React, { Component } from 'react'

class AgentNav extends Component {
  render() {
    return (
      <React.Fragment>
              <ul className="asideList">
                <li><a href="" className="asideAnchor">My Account</a></li>
                <div className="dropdown">
                  <li><a href="" className="asideAnchor">Pickups <span>&#187;</span> </a></li>
                  <div className="dropdown_content">
                    <a href="" className="asideAnchor">New</a>
                    <a href="" className="asideAnchor">Pending</a>
                  </div>
                </div>
                <li><a href="" className="asideAnchor">History</a></li>
                <li><a href="" className="asideAnchor">Support</a></li>
              </ul>
      </React.Fragment>
    )
  }
}

export default AgentNav
