import React ,{Component,PropTypes} from 'react';
import style from '../../static/css/loading.css';

class Loading extends Component{
    render(){
        const {state} = this.props;
        return(
            <div className={state}>
                <div className="loader-container" id="loader">
                    <div className="loading-icon loader-icon">
                        <div id="loading"/>
                    </div>
                    <div className="offline-icon loader-icon">
                    </div>
                    <div className="error-icon loader-icon">
                    </div>
                    <div className="nothing-icon loader-icon">
                    </div>
                    <p className="text loading-text">正在加载中...</p>
                    <p className="text offline-text">当前无网络</p>
                    <p className="text error-text">加载失败</p>
                    <p className="text nothing-text">暂无数据</p>
                </div>
            </div>
        )
    }
}
export default Loading;