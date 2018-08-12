import history from '../history';

export function setItemList(keyword) {
  return (dispatch, getState) => {
    console.log(getState());
    dispatch({
      type: 'SET_KEYWORD',
      data: {
        keyword,
      },
    });
    history.push('/d');
  };
}
export function setEmpty() {
  return (dispatch, getState) => {
    console.log(getState());
    dispatch({
      type: 'SET_KEYWORD',
      data: {
        keyword: '',
      },
    });
  };
}
