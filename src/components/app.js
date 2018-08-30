import React, { Component } from 'react';
import Articles from './Articles/Articles';


const config = {
  url :'https://newsapi.org/v1/articles?source=the-verge&',
  apiKey :"59b95200a2da4aa5991a90f431f28f2f"
}
class App extends Component {

 constructor(props) {
      super(props);
        this.state = {
            articles:[]
        }
  }
  componentDidMount() {
  	const currentUrl = config.url + 'apiKey=' + config.apiKey;	
    fetch(currentUrl)
      .then(res => res.json())
      .then(json => this.setState({articles:json.articles}));
  }

  render() {
    console.log(this.state.articles)
    return (
      <div>
      	<Articles articles={this.state.articles} />
      </div>
    );
  }
}


export default App;
