/**
 * Created by chendi on 16/9/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../components/common/Input';
import LinkButton from '../components/common/LinkButton';
import NavigationBar from '../components/common/NavigationBar';
import {Link} from 'react-router';

class RegisterPage extends Component {
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

     **/
     componentDidMount(){
        var children = React.Children.toArray(this.props.children);
        console.log(this);
    }

    render(){
        return(
            <div>
                <NavigationBar
                    centerText={'注册'}
                    rightViewHidden={true}
                />
                <div className='login-page'>
                    <Input placeholder='手机号' topRadius={true}/>
                    <Input placeholder='密码'  isPassword={true}/>
                    <Input placeholder='确认密码' btmRadius={true} isPassword={true}/>
                    <div className="login-split"></div>




                    <Input placeholder='性别' topRadius={true}/>
                    <Input placeholder='学校'/>
                    <Input placeholder='班级'/>
                    <Input placeholder='邮箱' btmRadius={true} />

                    <div className="login-split"></div>

                    <LinkButton text="注册"/>
                    <div className="login-split"></div>
                    <label>已有账号?</label>
                    <LinkButton text="登录" onlyBorder={true} href={{pathname:'/login'}}/>

                </div>
            </div>
        )
    }
}
export default connect()(RegisterPage);