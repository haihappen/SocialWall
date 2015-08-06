import React, { Component, PropTypes } from 'react';


export default class InstagramWall extends Component {
  static propTypes = {
    images: PropTypes.array
  }


  render() {
    if(this.props.images.length == 0) return <ul></ul>;

    return (
      <ul>
        {this.props.images.map(image =>
          <li>
            <img key={image.id} src={image.images.thumbnail.url} />
          </li>
        )}
      </ul>
    );
  }
}
