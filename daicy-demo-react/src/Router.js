import React,{Component} from "react";
import {Router, Route} from "react-router-dom";
import Welcome from "./main/welcome/index"
import {createHashHistory} from "history"
const _hashHistory = createHashHistory();
export default () => {
    return <Router history={_hashHistory}>
        <div style={{height: "100%"}}>
            <Route path="/" exact component={Welcome}/>
        </div>
    </Router>
}
