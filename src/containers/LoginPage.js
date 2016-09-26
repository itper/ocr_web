/**
 * Created by chendi on 16/9/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../components/common/Input';
import LinkButton from '../components/common/LinkButton';
import NavigationBar from '../components/common/NavigationBar';
import {Link} from 'react-router';

class LoginPage extends Component {
    constructor(props){
        super(props);
        //this.state = {};
    }
    //updating
    /**
     componentWillReceiveProps(nextProps){

    }
     shouldComponentUpdate(props,state){

    }
     **/
    //mounting
    /**
     componentWillMount(){

    }
     componentDidMount(){

    }
     **/

    render(){
        return(
            <div>
                <NavigationBar
                    centerText={'登录'}
                    rightViewHidden={true}
                />
                <div className='login-page'>
                    <Input placeholder='手机号' topRadius={true}/>
                    <Input placeholder='密码' btmRadius={true} isPassword={true}/>
                    <div className="login-split"></div>
                    <LinkButton text="登录"/>
                    <div className="login-split"></div>
                    <label>还没账号?</label>
                    <LinkButton text="注册" onlyBorder={true} href={{pathname:'/register'}}/>
                </div>
            </div>
        )
    }
}
export default connect()(LoginPage);