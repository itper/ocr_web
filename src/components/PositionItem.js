/**
 * Created by chendi on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
class PositionItem extends Component {
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
                    <h2 className="item-title">{item.name}</h2>
                    <p className="item-info">
                        <span className="item-pos">{item.company}</span>
                        <span className="item-salary">{item.salary}</span>
                    </p>
                    <p className="item-time">{item.createdAt}</p>
                </div>
            </div>
        )
    }
}

PositionItem.propTypes = {};
PositionItem.defaultProps = {};
export default PositionItem;