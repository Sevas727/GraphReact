import * as types from './actionTypes';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function getItems() {
    return fetch('http://testtask.callway.com.ua/api/items')
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
                if (!response.ok) {
        return Promise.reject(json);
    }
    return json;

})
.then(
    response => response,
    error => error
);
}

export function loadItems() {
  return function(dispatch) {

      return getItems().then(items => {
      dispatch(loadItemsSuccess(items));
        }).catch(error => {
      throw(error);
    });
  };
}
