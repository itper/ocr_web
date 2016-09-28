/**
 * Created by chendi on 16/9/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import NavigationBar from '../../components/common/NavigationBar';
import Loading from '../../components/common/Loading';
import * as LoadingState from '../../constants/loading';


class PositionDetail extends Component {
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
        const {position,loading} =  this.props;
        return (
            <div>
                <Loading state={(()=>{
                    if(true){
                        return LoadingState.LOADING;
                    }else{
                        return '';
                    }
                })()}/>

                <NavigationBar
                    leftViewHidden={false}
                    rightViewHidden={true}
                    centerViewHidden={false}
                    centerText='职位详情'
                />
                <div id="content">

                    <div className="postitle">
                        <h2 className="title">前端开发</h2>
                        <div className="collicon activeable">
                            <span className="icon notcoll"></span>
                            <span className="text">未收藏</span>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="items">
                            <span className="item salary">
                                <em className="icon"></em>
                                <span className="text">12k-20k</span>
                            </span>
                            <span className="item workaddress">
                                <em className="icon"></em>
                                <span className="text">长沙</span>
                            </span>
                            <span className="item jobnature">
                                <em className="icon"></em>
                                <span className="text">全职</span>
                            </span>
                            <span className="item workyear">
                                <em className="icon"></em>
                                <span className="text">3-5年</span>
                            </span>
                            <span className="item education">
                                <em className="icon"></em>
                                <span className="text"> 本科及以上 </span>
                            </span>
                        </div><div className="temptation"> 职位诱惑：提供最有竞争力的薪酬待遇及期权 </div>
                    </div>

                    <div className="company activeable">
                        <img src="//www.lgstatic.com/i/image/M00/38/A4/CgqKkVdjiXuAYRBOAACT1yQ2z5A996.jpg" alt="" className="logo"/>
                        <div className="desc">
                            <div className="dleft">
                                <h2 className="title"> 福米科技 </h2>
                                <p className="info">  移动互联网,金融   / 天使轮   / 50-150人  </p>
                            </div>
                        </div>
                    </div>

                    <div className="positiondesc">
                        <header className="header"> 职位描述 </header>
                        <div className="content">
                            <p>
                                <strong>
                                    <span className="">岗位职责</span>
                                </strong>
                            </p>
                        </div>
                    </div>

                    <div className="deliver" id="deliver_resume"> 投个简历 </div>

                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PositionDetail);