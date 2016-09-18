import * as types from './actionTypes';


export function loadGraphicsSuccess(coord) {
    return { type: types.LOAD_GRAPHICS_DATA, coord};
}

export function getGraphics() {
    return fetch('http://testtask.callway.com.ua/api/chart')
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


export function loadGraphics() {
    return function(dispatch) {

        return getGraphics().then(coord => {
            dispatch(loadGraphicsSuccess(coord));
    }).catch(error => {
        throw(error);
});
};
}
