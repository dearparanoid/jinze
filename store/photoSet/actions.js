export const FETCH_ALL_PHOTO_SETS_DATA = 'FETCH_ALL_PHOTO_SETS_DATA';
export const SET_ALL_PHOTO_SETS_DATA = 'SET_ALL_PHOTO_SETS_DATA';
export const INIT_ALL_PHOTO_SETS_DATA = 'INIT_ALL_PHOTO_SETS_DATA';

export const fetchAllPhotoSetsData = () => {
  return {
    type: FETCH_ALL_PHOTO_SETS_DATA,
  }
}

export const setAllPhotoSetsData = (data = {}) => {
  const { photosets } = data;
  return {
    type: SET_ALL_PHOTO_SETS_DATA,
    photosets,
  }
}

export const initAllPhotoSetsData = () => {
  return {
    type: INIT_ALL_PHOTO_SETS_DATA
  }
}
