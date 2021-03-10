import './App.css';
import  { Component } from 'react'
import { Route, withRouter} from 'react-router-dom'
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
