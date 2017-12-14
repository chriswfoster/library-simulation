import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';


import Home from './components/Home/Home';
import Login from './components/Login/Login'

import store from './store'


export default(

<Switch>
<Route exact path="/" component={Login}/>
<Route path="/Home" component={Home}/>
    </Switch>

)