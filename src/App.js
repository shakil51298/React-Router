import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import FriendDetails from './Components/FriendDetail/FriendDetails';
import Features from './Components/Features/Features';
import Pricing from './Components/Pricing/Pricing';


function App() {
  
  return (
      
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path='/friend/:id'>
          <FriendDetails></FriendDetails>
        </Route>
        <Route path='/features'>
          <Features/>
        </Route>
        <Route path='/pricing'>
          <Pricing></Pricing>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
