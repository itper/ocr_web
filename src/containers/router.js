import {Route,Redirect} from 'react-router';
import UserContainer from './UserContainer';
import PositionsContainer from './PositionsContainer';
import OCRContainer from './OCRContainer';
import App from './App';
import LoginPage from './LoginPage';
import React from 'react';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import RegisterPage from './RegisterPage';
import CompanyPage from './company/CompanyList';
import CompanyDetail from './company/CompanyDetail';
import AddCompany from './company/AddCompany';
import PositionDetail from './position/PositionDetail';
import PositionList from './position/PositionList';
import AddPosition from './position/AddPositon';
import SigninPage from './user/SigninPage';
import SigninCodePage from './user/SigninCodePage';
export default(
    <Route>
        <Route path="/" component={App}>
            <Route path="/home" component={HomePage}>
                <Route path="user" component={UserContainer}>
                    {/**<Route path="/:userId" component={}/>**/}
                </Route>
                <Route path="position" component={PositionList}>
                    {/**<Route path="/:positionId" component={}/>**/}
                </Route>
                <Route path="ocr" component={CompanyPage}>
                    {/**<Route path="/:ocrId" component={}/>**/}
                </Route>
            </Route>
            <Route path="user" >
                <Route path='signin' component={SigninPage}/>
                <Route path='signincode' component={SigninCodePage}/>
            </Route>
            <Route path='/position/detail' component={PositionDetail}/>
            <Route path='/position/add' component = {AddPosition}/>

            <Route path="/ocr/detail" component={CompanyDetail}/>
            <Route path="/ocr/add" component={AddCompany}/>

            <Route path="/" component={DetailPage}>
                <Route path="login" component={LoginPage}/>
                <Route path="register" component={RegisterPage}/>
            </Route>
       </Route>
    </Route>
)