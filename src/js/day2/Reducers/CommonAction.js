
export function setItemList(filter, history) {
  const formData = Object.keys(filter).map(keyName => `${encodeURIComponent(keyName)}=${encodeURIComponent(filter[keyName])}`).join('&');
  return (dispatch, getState) => {
    fetch(`https://data.kcg.gov.tw/api/action/datastore_search?${formData}`, {
      method: 'GET',
      headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then((res) => {
        console.log('setItemList');
        console.log(res);
        dispatch({
          type: 'GET_CONTENT',
          data: {
            total: res.result.total,
            items: res.result.records,
            offset: filter.offset > 0 ? filter.offset : 0,
            q: res.result.q,
          },
        });
        history.push('/l');
      });
  };
}
export function setItem(filter, history) {
  const formData = Object.keys(filter).map(keyName => `${encodeURIComponent(keyName)}=${encodeURIComponent(filter[keyName])}`).join('&');
  return (dispatch, getState) => {
    fetch(`https://data.kcg.gov.tw/api/action/datastore_search?${formData}`, {
      method: 'GET',
      headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then((res) => {
        dispatch({
          type: 'GET_ITEM',
          data: res.result.records[0],
        });
        // history.push(`/d/${filter.q}`);
      });
  };
}
