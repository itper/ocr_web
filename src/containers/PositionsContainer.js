import React,{Component} from 'react';
import {connect} from 'react-redux';

class PositionsContainer extends Component{
    render(){
        return(<div>{'position'}</div>)
    }
}
export default connect()(PositionsContainer);