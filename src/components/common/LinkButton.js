/**
 * Created by chendi on 16/9/23.
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
class LinkButton extends Component {
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
        const {href,onlyBorder} = this.props;
        return (
            <div>
                <Link to={href}>
                    <span href={href} className={onlyBorder?"btn-border":'btn'}>{this.props.text}</span>
                </Link>
            </div>
        )
    }
}

LinkButton.propTypes = {};
LinkButton.defaultProps = {};
export default LinkButton;