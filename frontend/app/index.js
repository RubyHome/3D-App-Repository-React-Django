import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, browserHistory } from 'react-router';
import routes from './config/routes';
import Signin from './views/Signin';
import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';
import SwiperComponent from './components/common/SwiperComponent'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'


ReactDOM.render(
	<Router history={browserHistory}>{routes}</Router>,
    document.getElementById('root')
);

// ReactDOM.render(<SwiperComponent url="/react-test"/>, document.getElementById('root'));