import React,{Component} from 'react';
import {connect} from 'react-redux';
import OCRItem from '../components/OCRItem';
class OCRContainer extends Component{

    render(){
        const items = [{},{},{},{},{},{},{},{},{},{}];
        return(
            <div className='list'>
                {items.map((item)=>{
                    return(
                        <OCRItem/>
                    )
                })}
            </div>
        )
    }
}
export default connect()(OCRContainer);