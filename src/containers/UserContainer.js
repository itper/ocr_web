import React,{Component} from 'react';
import {connect} from 'react-redux';
import Input from '../components/common/Input';
import LinkButton from '../components/common/LinkButton';
import NotloginPage from './NotloginPage';
import HaveLoginPage from './HaveLoginPage';
class UserContainer extends Component{
    render(){
        const {haveLogin} = this.props;
        return(
            <div className='user-page'>
                {
                    haveLogin?<HaveLoginPage/>:<NotloginPage/>
                }
            </div>
        )
    }
}
export default connect()(UserContainer);