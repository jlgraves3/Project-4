import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Artists from './components/Artists';
import Works from './components/Works';
import Canvas from './components/Canvas';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentArtwork: null,
      selected: false,
    }
    this.selectArtwork = this.selectArtwork.bind(this);
  }

  //set artwork to be sketched over
  selectArtwork(artwork) {
    console.log(artwork)
    this.setState({
      currentArtwork: artwork,
      selected: true,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Nav />
        {this.state.selected ? <Canvas artwork={this.state.currentArtwork} /> : <Artists selectArtwork={this.selectArtwork}/>}
        </div>
      </Router>
    );
  }
}

export default App;
