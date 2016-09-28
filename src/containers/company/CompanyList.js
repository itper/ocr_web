/**
 * Created by chendi on 16/9/28.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {list} from '../../actions/company';
import { bindActionCreators } from 'redux';
import LoadMore,{LOADING,LOAD_FAILURE,LOAD_MORE,NOT_MORE} from '../../components/common/LoadMore';
import CompanyItem from '../../components/CompanyItem';

import Loading from '../../components/common/Loading';
import * as LoadingState from '../../constants/loading';

class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadState:LOAD_MORE
        };
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
     **/

    componentDidMount(){

        const {children} = this.props;
        if(children){
            return;
        }
        if(this.props.companyList.length===0){
            this.props.listAction(0,10);
        }
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
    render() {
        const {companyList,children,loadingState} = this.props;
        if(children){
            return <div>{children}</div>
        }
        return (
            <div>

                <Loading state={loadingState}/>

                <div className='list'>
                    {companyList.map((item)=>{
                        return(
                            <CompanyItem company={item}/>
                        )
                    })}
                    <LoadMore state={this.state.loadState} onClick={this.loadMore.bind(this)} hidden={(loadingState!==LoadingState.OVER)}/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        companyList:state.company.companyList,
        loadingState:state.company.loadingCompanyListState
    };
}
function mapDispatchToProps(dispatch, props) {
    return {
        listAction:bindActionCreators(list,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);