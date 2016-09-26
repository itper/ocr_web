/**
 * Created by chendi on 16/9/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Avatar from '../components/common/Avatar';
import SettingItem from '../components/SettingItem';

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

        return (
            <div className='have-login-page'>
                <Avatar/>
                <div className='setting-list'>

                    <SettingItem logoType='vector' isFirstLine={true} text="签到" logo='sign-in' type={'sign-in'}/>
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
                    <SettingItem logoType='vector' isLastLine={true}  text="退出" logo='sign-out'/>
                </div>
            </div>
        )
    }
}
export default connect()(HaveLoginPage);