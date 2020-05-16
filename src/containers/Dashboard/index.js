import React, { Component } from 'react'
import { isAuthenticated, removeAuthenticatedState, isAuthType } from '../../services/Auth'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchUserData } from '../../store/actions/user'
import withStyles from '@material-ui/core/styles/withStyles';
import AdminNav from '../../components/Navigations/AdminNav'
import AgentNav from '../../components/Navigations/AgentNav'
import CustomerNav from '../../components/Navigations/CustomerNav'

const styles = (theme) => ({
  ...theme.spreadthis
});

class Dashboard extends Component {
  constructor(props) {
    super(props)
    let { fetchData, userData } = this.props
    if (userData.userData.length === 0) {
      fetchData(isAuthenticated())
      // console.log('hmmm')
    }
    this.signOut = this.signOut.bind(this)
  }

  signOut() {
    removeAuthenticatedState()
    window.location.reload(true);
  }

  componentDidMount() {
    switch (isAuthType()){
      case 'customer':
        this.nav = <CustomerNav/>;
        break;
      case 'agent':
        this.nav = <AgentNav/>;
        break;
      case 'admin':
        this.nav = <AdminNav/>;
      default:
        this.nav = <li><a href="" className="asideAnchor">Please reload...</a></li>;

    }
  }

  render() {
    let { loading, userData, error, errorMessage } = this.props.userData
    if (userData.length === 0) {
      if (loading === 'true') {
        return (<div>loading</div>)
      } else if (error === 'true') {
        return (<div><h3>{errorMessage} <br /> Please try again later.</h3></div>)
      }
    } else {
      return (
        <React.Fragment>
          <div className="panel_header">
            <div className="header_name">
              Sweeper
                    </div>
            <div className="header_button">
              <button type="button" onClick={this.signOut} className="panel_logout">Log Out</button>
            </div>
          </div>

          <div className="panel_container">

            <input type="checkbox" id="myInput" className="panel_checkbox" />
            <label htmlFor="myInput" className="bar_label">
              <span className="bar top"></span>
              <span className="bar middle"></span>
              <span className="bar bottom"></span>
            </label>


            <div className="link">
              { this.nav }
            </div>

            <div className="content">
              {this.props.children}
              <div className="height"></div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (name) => dispatch(fetchUserData(name))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Dashboard)