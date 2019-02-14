import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from './actions';
import { UserID, APIKEY } from '../../common/F_API';
import { GET_PHOTO_LIST } from '../../common/F_Method';
import * as utils from '../../utils/utils';

function fetchAllPhotoSetsDataApi() {

  const requestURL =
    utils.createURL({
      method: GET_PHOTO_LIST,
      api_key: APIKEY,
      user_id: UserID,
    });

  return axios.get(requestURL)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

function* fetchAllPhotoSetsData(action) {
  const { response, error } = yield call(fetchAllPhotoSetsDataApi);
  if (response) {
    yield put(actions.setAllPhotoSetsData(response.data));
  } else {
    yield put(actions.setAllPhotoSetsData({ status: 'error' }));
  }
}

export function* photoSetSaga() {
  yield takeLatest(actions.FETCH_ALL_PHOTO_SETS_DATA, fetchAllPhotoSetsData);
}
