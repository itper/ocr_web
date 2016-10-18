import axios from 'axios';

export const ADD_POSITION_SUCCESS = 'ADD_POSITION_SUCCESS';
export const ADD_POSITION_FAILURE = 'ADD_POSITION_FAILURE';
export const GET_POSITION_SUCCESS = 'GET_POSITION_SUCCESS';
export const START_GET_POSITION_LIST = 'START_GET_POSITION_LIST';
export const GET_POSITION_LIST_SUCCESS = 'GET_POSITION_LIST_SUCCESS';
export const GET_POSITION_LIST_FAILURE = 'GET_POSITION_LIST_FAILURE';
export const UPDATE_POSITION_SUCCESS = 'UPDATE_POSITION_SUCCESS';
const url = 'http://ocr.itper.xyz/position';
export function list(page,pageSize=10){
    return async dispatch=>{
        try{
            dispatch({type:START_GET_POSITION_LIST});
            await new Promise(function(resolve,reject){
                setTimeout(function(){resolve()},0);
            });
            const data = await axios.get(`${url}`,{
                params: {
                    page: page,
                    pageSize:pageSize
                },
                withCredentials:true
            });
            if(data.data.code===0){
                dispatch({type:GET_POSITION_LIST_SUCCESS,cpList:data.data.data.list})
            }else{
                dispatch({type:GET_POSITION_LIST_FAILURE,cpList:null})
            }
        }catch(err){
            console.log(err);
            dispatch({type:GET_POSITION_LIST_FAILURE,err});
        }
    }
}