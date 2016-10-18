/**
 * Created by chendi on 16/9/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import NavigationBar from '../../components/common/NavigationBar'
import Input from '../../components/common/Input';
import LinkButton from '../../components/common/LinkButton';
import {connectValue} from '../../util/formHelp';


class AddCompany extends Component {
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

    handleSubmit(e){
        e.preventDefault();
        const {phone,pwd} = this.state;
        this.props.loginAction(phone,pwd);
    }
    render() {

        return (
            <div>
                <NavigationBar
                    leftViewHidden={false}
                    rightViewHidden={true}
                    centerViewHidden={false}
                    centerText='添加'
                />
                <div className='login-page'>
                    <form onSubmit = {this.handleSubmit.bind(this)}>
                        <Input placeholder='企业名称' topRadius={true} {...connectValue('name',this)}/>
                        <Input placeholder='logo'  {...connectValue('logo',this)}/>
                        <Input placeholder='描述'   {...connectValue('desc',this)}/>
                        <Input placeholder='类型'   {...connectValue('type',this)}/>
                        <Input placeholder='人数'   {...connectValue('number',this)}/>
                        <Input placeholder='地址'   {...connectValue('address',this)}/>
                        <Input placeholder='详细介绍'   {...connectValue('introduction',this)}/>
                        <Input placeholder='标签' btmRadius={true}  {...connectValue('tag',this)}/>
                        <div className="login-split"></div>
                        <LinkButton text="添加"/>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch, props) {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCompany);