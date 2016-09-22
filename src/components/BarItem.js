/**
 * Created by chendi on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
class BarItem extends Component {
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
        const {checked} = this.props;
        const {text,value} = this.props.item;
        return (
            <div className={(()=>{
                if(checked){
                    return 'active bar-item';
                }else{
                    return 'bar-item';
                }
            })()}>
                <Link to={`/${value}`}>
                    <div className='wrapper'>
                        <span className={'icon icon-'+value}/>
                        <span className='text'>{text}</span>
                    </div>
                </Link>
            </div>
        )
    }
}

BarItem.propTypes = {};
BarItem.defaultProps = {};
export default BarItem;