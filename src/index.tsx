import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import styles from './index.scss';
import store from './reduxStore';
import { NavComponent } from "./components/NavComponent";
import { ProductData } from "./components/ProductComponent"



const App = () =>{
    return (<ProductData />)
}



ReactDom.render( <Provider store={store}><NavComponent/><App/></Provider>,document.getElementById('root'));