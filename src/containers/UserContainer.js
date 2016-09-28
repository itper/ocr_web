import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import Input from '../components/common/Input';
import LinkButton from '../components/common/LinkButton';
import NotloginPage from './NotloginPage';
import HaveLoginPage from './HaveLoginPage';
import {validLogin} from '../actions/user';
import {bindActionCreators} from 'redux';
class UserContainer extends Component{
    getChildContext(){
        return {
            fruit:'value 1'
        }
    }
    componentDidMount(){
        if(this.props.user){

        }else{
            this.props.validLogin();
        }
    }
    render(){
        const {user} = this.props;
        return(
            <div className='user-page'>
                {
                    user?<HaveLoginPage user={user}/>:<NotloginPage/>
                }
            </div>
        )
    }
}
UserContainer.childContextTypes={
    fruit:PropTypes.string.isRequired
}
function mapStateToProps(state,props){
    return {
        user:state.user.user,
    }
}
function mapDispatchToProps(dispatch,props){
    return {
        validLogin:bindActionCreators(validLogin,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);