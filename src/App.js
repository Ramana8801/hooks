import logo from './logo.svg';
import './App.css';
import Deals from './deals/deals';
import Header from './header/header';
import {BrowserRouter, Router} from './'
import React from 'react'
import Herolist from './hero.list/hero.list.component';
import WelcomeDialog from './welcome1/welcome1';

import WelcomeDialog1 from './welcome1/welcome3';
import App1 from './welcome1/welcome2';
import SignUpDialog from './welcome1/welcome4';
import Year from './hooks/increment';
import { Form } from 'react-bootstrap';
import User from './hooks/user';
import Todo from './hooks/todo';
import Comments from './hooks/comments';
import Posts from './hooks/posts';

function App() {
  return (
    <div className="App">
      
       <User/>
       <Comments/>
       <Posts/>
       <Todo/>
    </div>
  );
}
class MovieInfo extends React.Component {

  render() {
  
    const {id} = this.Id;
    return (
      <div>
      
        id={id}
      </div>
    )
    
}
}
export default App;
