import React, { Component } from 'react';
import logo from './../image/logo.jpg';
import './../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          测试页面123456
        </div>
        <img className="img" src={logo} alt=""/>
     </div>
    );
  }
}

export default App;
