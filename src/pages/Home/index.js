import React, {useState, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class App extends Component {
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
          isOpen: false
      };
  }
  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
  render() {
      return (
          <div>
              <Navbar color="ligth" light expand="md">
                  <NavbarBrand href="/">reactstrap</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="/components/">Components</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </Navbar>
          </div>
      );
  }
}

export default App;
 
