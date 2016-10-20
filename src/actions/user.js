import axios from 'axios';

export const LOGIN_SUCCESS = 'login-success';
export const LOGIN_FAILURE = 'login-failure';
export const VALID_SUCCESS = 'valid-success';
export const VALID_FAILURE = 'valid-failure';
export const REGISTER_FAILURE = 'register-failure';
export const REGISTER_SUCCESS = 'register-success';
export const LOGOUT_SUCCESS = 'logout-success';
export const START_SIGNIN = 'start-signin';
export const SIGNIN_SUCCESS='signin-success';
export const SIGNIN_FAILURE = 'signin-failure';
export const CREATE_SIGNIN_SUCCESS= 'CREATE_SIGNIN_SUCCESS';
export const CREATE_SIGNIN_FAILURE = 'CREATE_SIGNIN_FAILURE';
export const START_CREATE_SIGNIN_SUCCESS='STAT_CREATE_SIGNIN_SUCCESS';
export const CREATE_CODE_STATE_RESET = 'CREATE_CODE_STATE_RESET';
const url = 'http://ocr.itper.xyz/user';
export function login(phone,pwd){
    return async dispatch=>{
        try{
            const data = await axios.post(`${url}/login`,{
                number:phone,pwd
            },{
                withCredentials:true
            });
            if(data.data.code===0){
                dispatch({type:LOGIN_SUCCESS,user:data.data.data})
            }else{
                dispatch({type:LOGIN_FAILURE,user:null})
            }
        }catch(err){
            dispatch({type:LOGIN_FAILURE,err});
        }
    }
}
export function validLogin(){
    return async dispatch=>{
        try{
            const data = await axios.get(`${url}/valid`,{
                withCredentials:true
            });
            if(data.data.code===0){
                dispatch({type:VALID_SUCCESS,user:data.data.data})
            }else{
                dispatch({type:VALID_FAILURE,user:null})
            }
        }catch(err){
            dispatch({type:VALID_FAILURE,err});
        }
    }
}
export function signin(code){
    return async dispatch=>{
        dispatch({type:START_SIGNIN});
        let data;
        try{
            data = await axios.get(`${url}/signin`,{
                params:{
                    code:code
                },
                withCredentials:true
            });
        }catch(err){
            dispatch({type:SIGNIN_FAILURE});
            return;
        }
        if(data.data.code===0){
            dispatch({type:SIGNIN_SUCCESS});
        }else{
            dispatch({type:SIGNIN_FAILURE});
        }
    }
}
export function createCode(code){
    return async dispatch=>{
        dispatch({type:START_CREATE_SIGNIN_SUCCESS});
        let data;
        try{
            data = await axios.get(`${url}/createcode`,{
                withCredentials:true
            });
        }catch(err){
            dispatch({type:CREATE_SIGNIN_FAILURE});
            return;
        }
        if(data.data.code===0){
            dispatch({type:CREATE_SIGNIN_SUCCESS,code:data.data.data.code.code});
        }else{
            dispatch({type:CREATE_SIGNIN_FAILURE});
        }
    }
}
export function logout(){
    return async dispatch=>{
        try{
            const data = await axios.get(`${url}/logout`,{
                withCredentials:true
            });
             dispatch({type:LOGOUT_SUCCESS})
        }catch(err){
            dispatch({type:LOGOUT_SUCCESS})
        }
    }
}
export function register(phone,pwd){
    return async dispatch=>{
        try{
            const data = await axios.post(`${url}/add`,{
                username:phone,pwd
            },{
                withCredentials:true
            });
            if(data.data.code===0){
                dispatch({type:REGISTER_SUCCESS,user:data.data.data})
            }else{
                dispatch({type:REGISTER_FAILURE});
            }
        }catch(err){
            dispatch({type:REGISTER_FAILURE},err);
        }
    }
}


export function loadOcr(page,pageSize=20){
    return {
        type:'load'
    }
}