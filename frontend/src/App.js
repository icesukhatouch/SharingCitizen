import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Button, Container, Form, FormGroup, Label, Input } from 'reactstrap'


class App extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      showNav: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  onClicked() {
    this.setState({showNav: true});
    console.log(this.state.showNav);
  }
  render() {
    const show = true;

    return (
      <div className="App">
        <SideNav
              showNav        =  {this.state.showNav}
              onHideNav      =  {() => this.setState({showNav: false})}
              title          =  "Hello World"
              items          =  {['home', 'services', 'about', 'contact']}
              titleStyle     =  {{backgroundColor: '#4CAF50'}}
              itemStyle      =  {{backgroundColor: '#fff'}}
              itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
          />
          <button onClick={() => console.log("dsfdsfdsfdsf")}>dsdfdsf</button>
        <div className="App-header">
           <button onClick={() => this.onClicked()}>fdsfdsfdsf</button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

       
       
          

          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
        </Jumbotron>

      </div>
    );
  }
}

export default App;









