import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav, {MenuIcon} from 'react-simple-sidenav';

class App extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        
        <MenuIcon onClick={() => this.setState({showNav: true})} className="toggler" />
          <SideNav
              showNav        =  {this.state.showNav}
              onHideNav      =  {() => this.setState({showNav: false})}
              title          =  "Hello World"
              items          =  {['home', 'services', 'about', 'contact']}
              titleStyle     =  {{backgroundColor: '#4CAF50'}}
              itemStyle      =  {{backgroundColor: '#fff'}}
              itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
          />

      </div>
    );
  }
}

export default App;






