/**
 * Created by chendi on 16/9/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';


class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
        const {position} = this.props;
        return (
            <div>
                <div id="content">
                    <div className="postitle">
                        <h2 className="title"></h2>
                        <div className="collicon activeable">
                            <span className="icon notcoll"/>
                            <span className="text">  未收藏  </span>
                        </div>
                    </div>
                </div>
                'detail'
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch, props) {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);