import React, { Component } from 'react';

class List extends Component {
  render() {
    const{title,publishedAt,url,author,urlToImage,key} = this.props
    return (
      <div>
      	<ul>
	      	<li key={key}>
            <p>IMG :{urlToImage}</p>
		        <p>TITLE :{title}</p>
            <p>DATE :{publishedAt}</p>
            <p>Author :{author}</p>
            <p>URL :{url}</p>

			</li>
		</ul>
      </div>
    );
  }
}

export default List;