import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import SigninView from '../views/Signin';

import { Route, IndexRoute, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Route path="/index">
    	<IndexRoute component={SigninView}> </IndexRoute>
        <Route path="/dashboard" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="/main" component={MainView}> </Route>
            <Route path="/minor" component={MinorView}> </Route>
        </Route>
    </Route>

);