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
import {login} from '../actions/user';
import { bindActionCreators } from 'redux';

class LoginPage extends Component {
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
    handleSubmit(e){
        e.preventDefault();
        const {phone,pwd} = this.state;
        this.props.loginAction(phone,pwd);
    }
    render(){
        if(this.props.auth){
            this.context.router.push('/home/ocr');
            return;
        }
        return(
            <div>
                <NavigationBar
                    centerText={'登录'}
                    rightViewHidden={true}
                />
                <div className='login-page'>
                    <form onSubmit = {this.handleSubmit.bind(this)}>
                        <Input placeholder='手机号' topRadius={true} {...connectValue('phone',this)}/>
                        <Input placeholder='密码' btmRadius={true} isPassword={true} {...connectValue('pwd',this)}/>
                        <div className="login-split"></div>
                        <LinkButton text="登录"/>
                        <div className="login-split"></div>
                        <label>还没账号?</label>
                        <LinkButton text="注册" onlyBorder={true} href={{pathname:'/register'}}/>
                    </form>
                </div>
            </div>
        )
    }
}
LoginPage.contextTypes = {
    router:React.PropTypes.object
}
function mapStateToProps(state,ownProps){
    return {
        auth:state.user.user
    };
}
function mapDispatchToProps(dispatch,props){
    return {
        loginAction:bindActionCreators(login,dispatch),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);