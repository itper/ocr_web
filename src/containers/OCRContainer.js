import React,{Component} from 'react';
import {connect} from 'react-redux';
import OCRItem from '../components/OCRItem';
import LoadMore,{LOAD_MORE,LOAD_FAILURE,LOADING,NOT_MORE} from '../components/common/LoadMore';
class OCRContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            loadState:LOAD_MORE
        };
    }
     loadMore(state){
         switch(state){
             case LOAD_MORE:
                 this.setState({...this.state,loadState : LOAD_FAILURE});
                 break;
             case LOAD_FAILURE:
                 this.setState({...this.state,loadState : LOADING});
                 break;
         }
    }
    render(){
        const items = [{},{},{},{},{},{},{},{},{},{} ];

        return(
            <div className='list'>
                {items.map((item)=>{
                    return(
                        <OCRItem/>
                    )
                })}
                <LoadMore state={this.state.loadState} onClick={this.loadMore.bind(this)}/>
            </div>
        )
    }
}
export default connect()(OCRContainer);