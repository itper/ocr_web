/**
 * Created by chendi on 16/9/23.
 */

import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import classnames from 'classnames';
import style from '../../static/css/navigation.css';
import font from '../../static/fontawesome/font-awesome.min.css';

class NavigationBar extends Component {
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
    needHidden(hidden){
        return hidden?{display:'none'}:{};
    }
    createLeftView(){
        const {leftViewHidden} = this.props;
        if(leftViewHidden){
            return(

                <div
                    className="left-view">
                </div>
            )
        }
        return(
            <div
                className="left-view"
                onClick={this.props.leftViewClick}
                style={this.needHidden(leftViewHidden)}>

                {this.props.getLeftView()}
            </div>
        )
    }
    createRightView(){
        const {rightViewHidden} = this.props;
        if(rightViewHidden){
            return(
                <div
                    className="right-view">

                </div>
            )
        }
        return(
            <div
                className="right-view"
                style={this.needHidden(rightViewHidden)}>

                {this.props.getRightView()}
            </div>
        )
    }
    createCenterView(){
        const {centerViewHidden} = this.props;
        if(centerViewHidden){
            return(

                <div
                    className="center-view">
                </div>
                )
        }
        return(
            <div
                className="center-view"
                style={this.needHidden(centerViewHidden)}>

                {this.props.getCenterView(this.props.centerText)}
            </div>
        )
    }
    render() {
        return (
            <div className='navigation-bar'>
                <div className='navigation-bar-wrapper'>
                    {this.createLeftView()}
                    {this.createCenterView()}
                    {this.createRightView()}

                </div>
            </div>
        )
    }
}

NavigationBar.propTypes = {};
NavigationBar.defaultProps = {
    getCenterView:function(text){
        return (
            <span>{text}</span>
        )
    },
    getLeftView:function(){
        return (
            <i className='fa fa-angle-left' style={{'font-size':'30px'}}></i>
        )
    },
    getRightView:function(){
        return (
            <i className="fa fa-bell"></i>
        )
    },
    leftViewClick:function(){
        browserHistory.goBack();
    }
};
export default NavigationBar;