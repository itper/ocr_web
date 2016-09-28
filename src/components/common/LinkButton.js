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
        console.log('123',this.context.fruit);
        const {href,onlyBorder,onClick,type} = this.props;
        return (
            <div onClick={onClick?onClick.bind(this):null}>
                <Link to={href}>
                    <button type={type} href={href} className={onlyBorder?"btn-border":'btn'}>{this.props.text}</button>
                </Link>
            </div>
        )
    }
}
LinkButton.contextTypes = {
    fruit:PropTypes.string.isRequired
}
LinkButton.propTypes = {};
LinkButton.defaultProps = {};
export default LinkButton;