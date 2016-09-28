/**
 * Created by chendi on 16/9/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';


class AddCompany extends Component {
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

        return (
            <div>
                'add'
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
export default connect(mapStateToProps, mapDispatchToProps)(AddCompany);