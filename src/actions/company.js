import axios from 'axios';

export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_FAILURE = 'ADD_COMPANY_FAILURE';
export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS';
export const START_GET_COMPANY_LIST = 'START_GET_COMPANY_LIST';
export const GET_COMPANY_LIST_SUCCESS = 'GET_COMPANY_LIST_SUCCESS';
export const GET_COMPANY_LIST_FAILURE = 'GET_COMPANY_LIST_FAILURE';
export const UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS';
const url = 'http://ocr.itper.xyz/company';
export function list(page,pageSize=10){
    return async dispatch=>{
        try{
            dispatch({type:START_GET_COMPANY_LIST});
            await new Promise(function(resolve,reject){
                setTimeout(function(){resolve()},3000);
            })
            const data = await axios.get(`${url}/list`,{
                params: {
                    page: page,
                    pageSize:pageSize
                },
                withCredentials:true
            });
            if(data.data.code===0){
                dispatch({type:GET_COMPANY_LIST_SUCCESS,cpList:data.data.data.list})
            }else{
                dispatch({type:GET_COMPANY_LIST_FAILURE,cpList:null})
            }
        }catch(err){
            dispatch({type:GET_COMPANY_LIST_FAILURE,err});
        }
    }
}