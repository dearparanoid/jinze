import React, { PureComponent } from 'react';
import axios from 'axios';

import { createURL } from '../../utils/utils';
import { UserID, APIKEY } from '../../common/F_API';
import { GET_PHOTOS } from '../../common/F_Method';

class GetPhotosContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataReady: false,
    };
  }

  componentWillMount() {
    const requestURL =
      createURL({
        method: GET_PHOTOS,
        api_key: APIKEY,
        user_id: UserID,
        photoset_id: this.props.photoset_id,
      });

    axios.get(requestURL)
      .then(response => { console.log(response); this.setState({ dataReady: true }) })
      .catch(error => ({ error }));
  }


  render() {

    return (
      <div >gogog</div>
    );
  }
}


export default GetPhotosContainer;
