import {GET_COMPANY_LIST_FAILURE,GET_COMPANY_LIST_SUCCESS,START_GET_COMPANY_LIST} from '../actions/company';
import * as LoadingState from '../constants/loading';

export default function(state = {companyList:[]},action){
    switch(action.type){
        case GET_COMPANY_LIST_FAILURE:
            return {...state,loadingCompanyListState:LoadingState.ERROR};
        case GET_COMPANY_LIST_SUCCESS:
            console.log(action.cpList);
            console.log(state.companyList.concat(action.cpList));
            return {...state,companyList:state.companyList.concat(action.cpList),loadingCompanyListState:LoadingState.OVER};
        case START_GET_COMPANY_LIST:
            return {...state,loadingCompanyListState:LoadingState.LOADING}
        default:
            return {...state}
    }
}
