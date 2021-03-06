import React, { Component } from 'react';


import Articles from './Articles/Articles';



const config = {
  url :'https://newsapi.org/v2/top-headlines?country=us&',
  apiKey :"59b95200a2da4aa5991a90f431f28f2f"
}
class App extends Component {

 constructor(props) {
      super(props);
        this.state = {
            articlesArr:[],
            articles:[]
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
      articlesArr:this.state.articles.filter(function(a) {
      const searchValue = a.title.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    })
    })
  }
  render() {
    console.log(this.state.articles)
    return (
      <div style={pStyle}>
        <header style={headerStye}>
            <input style={inputStyles} type="text" id="title" onChange={this.handleSearch}/>
        </header>
        <main style={mainBox}>
      	    <Articles articles={this.state.articlesArr} />
            <aside>xxx</aside>
        </main>

      </div>
    );
  }
}
const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  background: '#180729',
  color: 'white',
  paddingTop: '10px',

};
const mainBox  = {
  padding:'5%',
};
const headerStye = {
  backgroundColor: 'rgba(255, 255, 255, 0.55)',
}
const inputStyles = {
  color:'black'
};


export default App;
