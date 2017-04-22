import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './reactjunkie_avatar.png';
import './App.css';
import ldClient from 'ldclient-js';

export default class App extends Component {
  state = {
    showFeature: false,
  };

  componentDidMount() {
    const user = {
      key: '1',
    };
    const client = ldClient.initialize('58fb1adc5a64a10a1bc8e308', user);

    client.on('ready', () => {
      console.log(`ld is ready!`);
      const showFeature = client.variation('show-sexy-avatar', false);
      this.setState({showFeature});
    });

    client.on('change:show-sexy-avatar', (value) => {
      this.setState({showFeature: value});
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.state.showFeature ? avatar : logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
