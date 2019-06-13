import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink } from 'reactstrap'
class App extends React.Component {
  render () {
    const {logged_in, sign_in_route, sign_out_route} = this.props
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disable Link</NavLink>
          </NavItem>
        </Nav>
        <React.Fragment>
          <h1>Hello Apartment App</h1>
          {logged_in &&
            <div>
              <h3>You are logged in</h3>
              <a href={sign_out_route}>Sign Out</a>
            </div>
          }
          {!logged_in &&
            <div>
              <h3>You are not logged in</h3>
              <a href={sign_in_route}>Sign In</a>
            </div>
          }
        </React.Fragment>
      </div>
    );
  }
}

export default App
