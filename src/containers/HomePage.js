/**
 * Created by chendi on 16/9/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import BottomBar from '../components/BottomBar';
import NavigationBar from '../components/common/NavigationBar';


const bottomConfig = {
        ocr:{text:'招聘会',value:'ocr'},
        position:{text:'职位',value:'position'},
        user:{text:'我的',value:'user'}
};

class HomePage extends Component {
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
        const {children,items} = this.props;
        const page = this.props.location.pathname.split('/')[2];
        return (
            <div>
                <NavigationBar
                    leftViewHidden={true}
                    rightViewHidden={false}
                    centerViewHidden={false}
                    centerText={bottomConfig[page].text}
                />
                <BottomBar items={Object.keys(bottomConfig).map((v)=>bottomConfig[v])} selected={bottomConfig[page].value}/>
                {children}
            </div>
        )
    }
}
export default connect()(HomePage);