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
              <nav class="navbar navbar-default" role="navigation"></nav>
          </div>
      );
  }
}

export default App;
 
