import React,{Component} from 'react';
import {connect} from 'react-redux';
import BottomBar from '../components/BottomBar';
import AppStyle from '../static/css/index.css';
import GlobalStyle from '../static/css/global.css';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {children,items} = this.props;
        const page = this.props.location.pathname.replace('/','');
        return (
            <div>
                <BottomBar items={items} selected={page}/>
                {children}
            </div>
        )
    }
}
export default connect()(App);