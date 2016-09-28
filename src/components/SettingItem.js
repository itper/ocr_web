/**
 * Created by chendi on 16/9/24.
 */

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class SettingItem extends Component {
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
        const {logo,type,state,text,isLastLine,isFirstLine,logoType,onClick} = this.props;
        return (
            <div onClick={onClick}  className="setting-list-item">
                <div className={classnames('',{'item-line first-line':isFirstLine})}></div>
                {logoType==='img'?(<img className="item-logo" src=""/>):(<i className={'item-logo fa fa-'+logo+' '+type}/>)}
                <div className="item-desc">
                    <span className="item-title">{text}</span>
                    <span className='fa fa-angle-right'/>
                    <span className="item-state">
                        {state}
                    </span>
                </div>
                <div className={classnames('',{'item-line first-line':isLastLine,'item-line':!isLastLine})}></div>
            </div>
        )
    }
}

SettingItem.propTypes = {};
SettingItem.defaultProps = {};
export default SettingItem;