/**
 * Created by chendi on 16/9/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import LinkButton from '../../components/common/LinkButton';
import NavigationBar from '../../components/common/NavigationBar';
import Input from '../../components/common/Input';
import Loading from '../../components/common/Loading';
import * as LoadingState from '../../constants/loading';
import {signin} from '../../actions/user';
import {connectValue} from '../../util/formHelp';

class SigninPage extends Component {
    constructor(props) {
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
     componentDidMount(){
    
    }
     **/

    render() {
        var text = '签到';
        if(this.props.loadingState===LoadingState.OVER){
            text = '签到成功';
        }else if(this.props.loadingState===LoadingState.ERROR){
            text = '签到失败,点击重试';
        }else{
            text = '签到中';
        }
        return (
            <div>
                <NavigationBar
                    leftViewHidden={false}
                    rightViewHidden={true}
                    centerViewHidden={false}
                    centerText='签到'
                />
                <div className='signin-page'>
                    <label>输入签到验证码</label>
                    <div className="split"></div>

                    <Input topRadius={true} btmRadius={true} {...connectValue('code',this)}/>
                    <div className="split"></div>
                    <div className="split"></div>

                    <LinkButton text={text} onClick={
                        ()=>{
                            this.props.signinAction(this.state.code);
                        }
                    }/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        loadingState:state.user.signinLoadingState,
    };
}
function mapDispatchToProps(dispatch, props) {
    return {
        signinAction:bindActionCreators(signin,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);