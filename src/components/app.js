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
            articlesArr:[],
            articles:'',
        }
  }
  componentDidMount() {
  	const currentUrl = config.url + 'apiKey=' + config.apiKey;	
    fetch(currentUrl)
      .then(res => res.json())
      .then(json => this.setState({
          articlesArr:json.articles,
          articles:json.articles
      }));
  }
  
  handleSearch = (event) =>{
    const searchQuery = event.target.value.toLowerCase();
    this.setState({
      articlesArr:this.state.articles.filter(function(gora) {
      const searchValue = gora.title.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    })
    })
  }
  render() {
    console.log(this.state.articles)
    return (
      <div>
        <input type="text" id="name" onChange={this.handleSearch}/>
      	<Articles articles={this.state.articlesArr} />
      </div>
    );
  }
}


export default App;
