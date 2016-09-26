/**
 * Created by chendi on 16/9/23.
 */

import React, {Component} from 'react';
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
                    <LinkButton href={{pathname:'/login'}} text="登录" onlyBorder={false}/>
                    <LinkButton href={{pathname:'/register'}} text="注册" onlyBorder={true}/>
                </div>
            </div>
        )
    }
}
export default connect()(NotloginPage);