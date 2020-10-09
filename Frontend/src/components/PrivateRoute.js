import React from "react";
import Auth from "../service/Auth";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => (<Route {...rest} render={(props) => (
    Auth.isAuthenticated() == true
        ? <Component {...props} />
        : <Redirect to='/login'/>
)}/>);

export default PrivateRoute;
