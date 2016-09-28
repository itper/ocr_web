/**
 * Created by chendi on 16/9/28.
 */

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';


export const LOAD_MORE = 'load-more';
export const LOADING = 'loading';
export const NOT_MORE = 'not-more';
export const LOAD_FAILURE = 'load=failure';
class LoadMore extends Component {
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
        const {state,onClick,hidden} = this.props;
        return (
            <div className='load-more' onClick={(e)=>{
                switch(state){
                        case LOAD_FAILURE:
                        case LOAD_MORE:
                            onClick( state );
                            break;
                    }
            }}
            style={hidden?{display:'none'}:{}}>
                {(()=>{
                    switch(state){
                        case LOAD_FAILURE:
                            return '加载失败,点击重试';
                        case LOAD_MORE:
                            return '点击加载更多';
                        case NOT_MORE:
                            return '最后一页';
                        case LOADING:
                            return '加载中'
                    }
                })()}
            </div>
        )
    }
}


LoadMore.propTypes = {
    state:React.PropTypes.string.isRequired
};
LoadMore.defaultProps = {};
export default LoadMore;