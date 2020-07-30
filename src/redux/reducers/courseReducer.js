import * as types from '../actions/actionTypes';
import React from 'react';

export default function courseReducers(state = [], action) {
	switch(action.type){
        case types.CREATE_COURSE:
        return [...state, {action.course}];
        default:
            return state;
    }
}
