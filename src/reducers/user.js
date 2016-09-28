import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,
    START_CREATE_SIGNIN_SUCCESS,
    CREATE_SIGNIN_FAILURE,
    CREATE_SIGNIN_SUCCESS,
    START_SIGNIN,
    LOGOUT_SUCCESS,
    VALID_FAILURE,
    VALID_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from '../actions/user';
import * as LoadingState from '../constants/loading';
export default function(state,action){
    switch(action.type){
        case LOGIN_FAILURE:
            return {...state};
        case REGISTER_FAILURE:
            return {...state};
        case LOGIN_SUCCESS:
            return {...state,user:action.user};
        case REGISTER_SUCCESS:
            return {...state,registerUser:action.user};
        case VALID_FAILURE:
            return {...state,user:null};
        case VALID_SUCCESS:
            return {...state,user:action.user};
        case LOGOUT_SUCCESS:
            return {...state,user:null};
        case START_SIGNIN:
            return {...state,signinLoadingState:LoadingState.LOADING};
        case SIGNIN_FAILURE:
            return {...state,signinLoadingState:LoadingState.ERROR};
        case SIGNIN_SUCCESS:
            return {...state,signinLoadingState:LoadingState.OVER};
        case CREATE_SIGNIN_FAILURE:
            return {...state,createCodeLoadingState:LoadingState.ERROR};
        case CREATE_SIGNIN_SUCCESS:
            return {...state,createCodeLoadingState:LoadingState.OVER,code:action.code};
        case START_CREATE_SIGNIN_SUCCESS:
            return {...state,createCodeLoadingState:LoadingState.LOADING};
        default:
            return {...state}
    }
}
