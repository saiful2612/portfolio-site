import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Component/About/About';
import Work from './Component/Work/Work';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>

      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/work">
            <Work></Work>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App; 
