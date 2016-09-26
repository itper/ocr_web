import React,{Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../components/common/NavigationBar';


class PositionsContainer extends Component{
    render(){
        return(
            <div>
                <div>{'position'}</div>
            </div>
        )
    }
}
export default connect()(PositionsContainer);