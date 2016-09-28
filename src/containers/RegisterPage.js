/**
 * Created by chendi on 16/9/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../components/common/Input';
import LinkButton from '../components/common/LinkButton';
import NavigationBar from '../components/common/NavigationBar';
import {Link} from 'react-router';
import {connectValue} from '../util/formHelp';
import {register} from '../actions/user';
import {bindActionCreators} from 'redux';
class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
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
    }
    handleRegister = e=>{
        e.preventDefault();
        this.props.registerAction(this.state.phone,this.state.pwd);
    }

    render(){
        if(this.props.register){
            this.context.router.push('login');
        }
        return(
            <div>
                <NavigationBar
                    centerText={'注册'}
                    rightViewHidden={true}
                />
                <div className='login-page'>
                    <form onSubmit={this.handleRegister}>

                        <Input placeholder='手机号' topRadius={true} {...connectValue('phone',this)}/>
                        <Input placeholder='密码'  isPassword={true} {...connectValue('pwd',this)}/>
                        <Input placeholder='确认密码' btmRadius={true}  isPassword={true} {...connectValue('pwd1',this)}/>
                        <div className="login-split"></div>


                        {/**
                        <Input id='sex' placeholder='性别' topRadius={true} {...connectValue('sex',this)}/>
                        <Input placeholder='学校' {...connectValue('college',this)}/>
                        <Input placeholder='班级' {...connectValue('classes',this)}/>
                        <Input placeholder='邮箱' btmRadius={true} {...connectValue('email',this)}/>
                        **/}

                        <div className="login-split"></div>

                        <LinkButton text="注册" type='submit'/>
                        <div className="login-split"></div>
                        <label>已有账号?</label>
                        <LinkButton text="登录" onlyBorder={true} href={{pathname:'/login'}}/>

                    </form>
                </div>
            </div>
        )
    }
}

RegisterPage.contextTypes = {
    router:React.PropTypes.object
}

function mapDispatchToProps(dispatch,props){
    return {
        registerAction:bindActionCreators(register,dispatch)
    };
}
function mapStateToProps(state,props){
    return {
        register:state.user.registerUser
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage);