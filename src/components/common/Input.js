/**
 * Created by chendi on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:this.props.value||'',
            closeEye:true,
            isPassword:this.props.isPassword
        };
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
    handleChange(e){
        this.setState({value:e.target.value});
    }
    render() {
        const {placeholder,topRadius,btmRadius}  = this.props;
        return (
            <div className='input-container'>
                <input
                    className={classnames({'input':true,'btm-radius':btmRadius,'top-radius':topRadius})}
                    type={this.state.isPassword?"password":"text"}
                    placeholder={placeholder}
                    value = {this.state.value}
                    onChange={this.handleChange.bind(this)}
                />
                {
                    (()=>{
                        if(!this.props.isPassword)return;
                        return(
                            <i className={classnames('fa eye',{'fa-eye':!this.state.closeEye,'fa-eye-slash':this.state.closeEye})} onClick={
                                ()=>{
                                        this.setState({...this.state,closeEye:!this.state.closeEye ,isPassword:!this.state.isPassword });
                                    }
                                }/>
                            )
                    })()
                }
            </div>
        )
    }
}

Input.propTypes = {};
Input.defaultProps = {};
export default Input;