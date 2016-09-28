/**
 * Created by chendi on 16/9/23.
 */

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class Avatar extends Component {
    constructor(props) {
        const p = {...props};
        super(p);
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
        const {avatar,username} = this.props.user;
        return (
            <div className='user-avatar'>
                <div className="headcon">
                    <img className="headpic" src={avatar}/>
                </div>
                <div className='name'>{username}</div>
            </div>
        )
    }
}

Avatar.propTypes = {};
Avatar.defaultProps = {};
export default Avatar;