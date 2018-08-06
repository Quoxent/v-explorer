import React, { Component } from 'react';
import Select from 'react-opium-select';
import 'react-opium-select/style.css';

class App extends Component {
  render() {
    const settings = {
      style: {
        background: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        padding: '6px 10px',
        textColor: 'white'
      }
    };

    return (
      <div className="select">
        <Select { ...this.props } settings={ settings } />
      </div>
    );
  }
}

export default App;
