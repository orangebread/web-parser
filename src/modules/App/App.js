import React, { Component } from 'react';
import axios from 'axios';

import UrlBar from './components/UrlBar';
import CarouselComponent from './components/Carousel';
import WordCount from './components/WordCount';
import Error from './components/Error';

import './App.scss';

class App extends Component {
  state = { images: [], text:'', error: false };

  onUrlSubmit = async (url) => {
    try {
      const response = await axios.post('http://localhost:3005/api/parser', {
        url: url
      });
      if (response.data.success) {
        this.setState({
          images: response.data.results.images,
          text: response.data.results.text,
          error: false
        });
      } else {
        this.setState({ error: true });
      }
    } catch (err) {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Error error={this.state.error} />
          <UrlBar onSubmit={this.onUrlSubmit} error={this.state.error} />
        </header>
        <CarouselComponent images={this.state.images} />
        <WordCount text={this.state.text} />
      </div>
    );
  }
}

export default App;
