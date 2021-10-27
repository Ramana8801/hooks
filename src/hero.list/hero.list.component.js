import React from 'react';
import react, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 


import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import Dairy from '../dairy'
import Veggies from '../veggies' 
import Fruits from '../fruits'
import Beverages from '../beverages'
import GeneralItems from '../generalitems'





function Herolist(props){
    console.log(props);
    return(
        <BrowserRouter>
            <div className='herolist'>
                <nav>
            
            <Link to={props.categoryname.linkUrl}>{props.categoryname.name}</Link>
            <div id="img1">
                <img src= {props.categoryname.imageUrl} height={250} width={250} align="centre" />
            </div>
            </nav>
            <Switch>
                <Route exact path="/Deserts" exact component={Dairy}>
                    <Dairy />
                </Route>
                <Route exact path="/Biryani">
                    <Veggies />
                </Route>
                <Route exact path="/Starters">
                    <Fruits />
                </Route>
                <Route exact path="/Alcohol">
                    <GeneralItems />
                </Route>
                <Route exact path="/beverages">
                 <Beverages/>
                </Route>
            </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Herolist;