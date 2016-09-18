import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function graphicsReducer(state = initialState.coord, action) {
    switch (action.type) {
        case types.LOAD_GRAPHICS_DATA:
            return action.coord;

        default:
            return state;
    }
}