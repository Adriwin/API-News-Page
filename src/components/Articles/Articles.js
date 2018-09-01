import React, { Component } from 'react';
import List from "../List/List";

class Articles extends Component { 

  render() {

    const{articles} = this.props;
 
    return (
        <div>
          {articles.map(list =>
          <List key={list.id}
                title={list.title}
                publishedAt={list.publishedAt}
                url={list.url}
                author={list.author}
                urlToImage={list.urlToImage} />
            )}
        </div>
    )
  }
}

export default Articles;