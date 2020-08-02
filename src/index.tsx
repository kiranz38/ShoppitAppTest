import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import styles from './index.scss';
import store from './reduxStore';
import { NavComponent } from "./components/NavComponent";
import { ProductData } from "./components/ProductComponent"
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () =>{
    return (<><NavComponent/><ProductData /></>)
}



ReactDom.render( <Provider store={store}>
        <BrowserRouter> 
			<Switch>
            <Route path="/" component={App} />
			<Route  path="/home" component={App} />
				
			</Switch>
		</BrowserRouter>
   </Provider>,document.getElementById('root'));