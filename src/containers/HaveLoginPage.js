/**
 * Created by chendi on 16/9/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Avatar from '../components/common/Avatar';
import SettingItem from '../components/SettingItem';
import {logout} from '../actions/user';
import {bindActionCreators} from 'redux';

class HaveLoginPage extends Component {
    constructor(props) {
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

    render() {
        const {user} = this.props;
        console.log(user);
        return (
            <div className='have-login-page'>
                <Avatar user={user}/>
                <div className='setting-list'>

                    <SettingItem logoType='vector' isFirstLine={true} text="签到" logo='sign-in' type={'sign-in'}
                    onClick={()=>{
                        this.context.router.push('/user/signin');
                    }}/>
                    <SettingItem logoType='vector' isFirstLine={false} text="签到验证码" logo='sign-in' type={'sign-in'}
                                 onClick={()=>{
                        this.context.router.push('/user/signincode');
                    }}/>
                    <SettingItem logoType='vector'  text="我的简历" logo='file'/>
                    <SettingItem logoType='vector'  text="通知" logo='feed'/>
                    <SettingItem logoType='vector'  text="完善个人信息" logo='feed'/>
                    <SettingItem logoType='vector'  text="修改企业信息" logo='feed'/>
                    <SettingItem logoType='vector'  text="招聘会报名" logo='feed'/>
                    <SettingItem logoType='vector'  text="发起问卷" logo='feed'/>
                    <SettingItem logoType='vector'  text="生源查询" logo='feed'/>
                    <SettingItem logoType='vector'  text="简历投递" logo='feed'/>
                    <SettingItem logoType='vector'  text="添加职位" logo='plus-circle'/>
                    <SettingItem logoType='vector'  text="添加招聘会" logo='plus-circle'/>
                    <SettingItem logoType='vector'  text="更新我的资料" logo='edit'/>
                    <SettingItem logoType='vector' isLastLine={true}  text="退出" logo='sign-out' onClick={e=>{
                        this.props.logout();
                    }}/>
                </div>
            </div>
        )
    }
}
HaveLoginPage.contextTypes = {
    router:React.PropTypes.object
};
function dispatch(dispatch,props){
    return {
        logout:bindActionCreators(logout,dispatch)
    }
}
export default connect(null,dispatch)(HaveLoginPage);