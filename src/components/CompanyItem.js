/**
 * Created by chendi on 16/9/22.
 */

import React, {Component, PropTypes} from 'react';
class CompanyItem extends Component {
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
        const {company} = this.props;
        return (
            <div className="list-item">
                <img className="item-logo" src={company.logo}/>
                <div className="item-desc">
                    <h2 className="item-title">{company.name}</h2>
                    <p className="item-info">
                        <span className="item-pos">{company.address}</span>
                        <span className="item-salary">{company.number}人</span>
                    </p>
                    <p className="item-time">{company.type}</p>
                </div>
            </div>
        )
    }
}

CompanyItem.propTypes = {};
CompanyItem.defaultProps = {};
export default CompanyItem;