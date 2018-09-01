import React, { Component } from 'react';
import Img from 'react-image';

class List extends Component {
  render() {
    const{title,publishedAt,url,author,urlToImage,key} = this.props
    return (
      <div>
      	<ul style={listBox}>
	      	<li key={key} style={listChild}>
            <div>
              <Img style={listImage} src={urlToImage} alt="wind arrow" />
            </div>
            <div> 
              <h3>{title}</h3>
              <p>{url}</p>
              <p>Author:{author}</p>
              <p>{publishedAt}</p>
            </div>
			</li>
		</ul>
      </div>
    );
  }
}

const listBox = {
  listStyleType: 'none',
};
const listChild = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
};
const listImage = {
  width: '100%',
};
export default List;