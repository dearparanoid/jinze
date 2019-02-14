import * as actions from './actions'

export function photoSet(state = {}, action) {
  switch (action.type) {
    case actions.SET_ALL_PHOTO_SETS_DATA:
      return { ...state, allPhotoSets: action.photosets };
    case actions.INIT_ALL_PHOTO_SETS_DATA:
      return { ...state, allPhotoSets: {} };
    default:
      return state;
  }
}
