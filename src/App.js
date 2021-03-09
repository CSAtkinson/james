import './App.css';
import react, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter} from 'react-router-dom'
import mainPage from './MainPage/MainPage'

class App extends Component {
  render(){
    return (
      <div>
        <Route path='/' component={mainPage} />
      </div>
    );
  }  
}

export default withRouter(App);
