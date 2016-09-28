/**
 * Created by chendi on 16/9/23.
 */

import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import LinkButton from '../components/common/LinkButton';

class NotloginPage extends Component {
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
            <div className='not-login-page'>
                <div className='register-login'>
                    <LinkButton href={{pathname:'/login'}} text="登录" onlyBorder={false} onClick={e=>{e.preventDefault();this.props.dispatch({type:'1'})}}/>
                    <div className="login-split"></div>
                    <LinkButton href={{pathname:'/register'}} text="注册" onlyBorder={true}/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        a:state.a
    }
}
NotloginPage.contextTypes = {
    fruit:PropTypes.string.isRequired
}
export default connect(mapStateToProps)(NotloginPage);