/**
 * Created by chendi on 16/9/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import NavigationBar from '../../components/common/NavigationBar';
import LinkButton from '../../components/common/LinkButton';
import {createCode} from '../../actions/user';
import * as LoadingState from '../../constants/loading';

class SigninCodePage extends Component {
    constructor(props) {
        super(props);
        this.state = {t:30};
        this.isT = false;
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
        console.log('render');
        if(this.props.loadingState===LoadingState.OVER){
            if(!this.isT){
                 var t = ()=>{
                    setTimeout(()=>{
                        if(this.state.t===0){
                            this.props.createAction();
                            this.setState({...this.state,t:30});
                            this.isT = false;
                        }else{
                            this.setState({...this.state,t:this.state.t-1});
                            t();
                        }
                    },1000);
                };
                t();
                this.isT = true;
            }
        }else if(this.props.loadingState===LoadingState.ERROR){

        }else{

        }
        return (
            <div>

                <NavigationBar
                    leftViewHidden={false}
                    rightViewHidden={true}
                    centerViewHidden={false}
                    centerText='签到'
                />
                <div className="signin-code-page">

                    <strong>{this.props.code}</strong>
                    <LinkButton text="刷新" onClick={()=>{
                        this.props.createAction();
                    }}/>
                    <p>{this.state.t}秒后过期</p>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        code:state.user.code,
        loadingState:state.user.createCodeLoadingState
    };
}
function mapDispatchToProps(dispatch, props) {
    return {
        createAction:bindActionCreators(createCode,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SigninCodePage);