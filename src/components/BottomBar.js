/**
 * Created by chendi on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
import BarItem from './BarItem';
import style from '../static/css/bottom.css';
class BottomBar extends Component {
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
        const {items,selected} = this.props;
        return (
            <div className='bottom-bar'>
                {
                    items.map(item=>(<BarItem item={item} checked={item.value===selected}/>))
                }
            </div>
        )
    }
}

BottomBar.propTypes = {};
BottomBar.defaultProps = {
};
export default BottomBar;