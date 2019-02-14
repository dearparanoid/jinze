import React, { PureComponent } from 'react';
import Gallery from 'react-photo-gallery';

class GetPhotoset extends PureComponent {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {titlte,}

    return (
      <div className="portfolioTitle">
        <h1>{this.state.data.photoset.title}</h1>
        <Gallery photos={this.props.data} />
      </div>
    );
  }
}

export default GetPhotoset;
