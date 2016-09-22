import {Route,Redirect} from 'react-router';
import UserContainer from './UserContainer';
import PositionsContainer from './PositionsContainer';
import OCRContainer from './OCRContainer';
import App from './App';
import React from 'react';

export default(
    <Route>
        <Redirect from="/" to="/ocr"/>
        <Route path="/" component={App}>
            <Route path="/user" component={UserContainer}>
                {/**<Route path="/:userId" component={}/>**/}
            </Route>
            <Route path="/position" component={PositionsContainer}>
                {/**<Route path="/:positionId" component={}/>**/}
            </Route>
            <Route path="/ocr" component={OCRContainer}>
                {/**<Route path="/:ocrId" component={}/>**/}
            </Route>
       </Route>
    </Route>
)