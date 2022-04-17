
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from "../Landing/Landing";
import App from "../../App";
import NotFound from "../NotFound/NotFound";

const Router =() => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/shop/:shopId" component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router