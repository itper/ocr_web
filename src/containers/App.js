import React,{Component} from 'react';
import {connect} from 'react-redux';
import AppStyle from '../static/css/index.css';
import GlobalStyle from '../static/css/global.css';
import NavigationBar from '../components/common/NavigationBar';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        document.body.style.backgroundColor = "";
        const {children} = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}
function mapStateToProps(state){

}
export default connect()(App);