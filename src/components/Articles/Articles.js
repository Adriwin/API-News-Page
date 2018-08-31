import React, { Component } from 'react';
import List from "../List/List";

class Articles extends Component { 

  render() {

    const{articles} = this.props;
 
    return (
        <section>
          {articles.map(list =>
          <List key={list.id}
                title={list.title}
                publishedAt={list.publishedAt}
                url={list.url}
                author={list.author}
                urlToImage={list.urlToImage} />
            )}
        </section>
    )
  }
}

export default Articles;