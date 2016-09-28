import {GET_POSITION_LIST_FAILURE,GET_POSITION_LIST_SUCCESS,START_GET_POSITION_LIST} from '../actions/position';
import * as LoadingState from '../constants/loading';

export default function(state = {positionList:[]},action){
    switch(action.type){
        case GET_POSITION_LIST_FAILURE:
            return {...state,loadingPositionListState:LoadingState.ERROR};
        case GET_POSITION_LIST_SUCCESS:
            return {...state,positionList:state.positionList.concat(action.cpList),loadingPositionListState:LoadingState.OVER};
        case START_GET_POSITION_LIST:
            return {...state,loadingPositionListState:LoadingState.LOADING};
        default:
            return {...state}
    }
}
