import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        query: '',
        items: []
    }
  }
  
search(){
  //Google custom search endpoint
  const BASE_URL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCplEami2qYsRQ8Q-hSpg3RsAwn7gZi3NI&cx=011047719248783927992:rkobvfefre8&searchType=image&q=';
  //Get json with query results and save in state
  fetch(`${BASE_URL}${this.state.query}`, { method: "GET"})
      .then(response => response.json())
      .then(json => {
          let { items } = json;
          this.setState({items})
      });
}
//render form and results
render(){
  return (
      <div className="App">
          <h2>Images search</h2>
          <FormGroup>
              <InputGroup>
                  <FormControl 
                  type="text" 
                  placeholder="Search for an image" 
                  onChange={event => this.setState({query: event.target.value})}
                  onKeyPress={event => {
                      if(event.key === 'Enter'){
                          this.search();
                      }
                  }}
                  />
                  <InputGroup.Addon onClick={() => this.search()}>
                      <Glyphicon glyph="search"></Glyphicon>
                  </InputGroup.Addon>
              </InputGroup>
          </FormGroup>
          <Gallery items={this.state.items}/>
      </div>
  )
}
}

export default App;
