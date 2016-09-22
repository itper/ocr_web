/**
 * Created by chendi on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
class OCRItem extends Component {
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
        const {item} = this.props;
        return (
            <div className="list-item">
                <img className="item-logo" src="http://www.lgstatic.com/image1/M00/00/33/CgYXBlTUXI-AC08_AACIkHlny3Y866.jpg"/>
                <div className="item-desc">
                    <h2 className="item-title">公司</h2>
                    <p className="item-info">
                    <span className="item-pos">技术支持/产品升级 [ 上海 ]</span>
                    <span className="item-salary">4k-6k</span>
                    </p>
                    <p className="item-time">今天 18:20</p>
                </div>
            </div>
        )
    }
}

OCRItem.propTypes = {};
OCRItem.defaultProps = {};
export default OCRItem;