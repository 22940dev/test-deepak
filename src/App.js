import './App.css';
import Nav from './components/Nav';
import Home from "./components/Home";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Archieve from './components/archieve/Archieve';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/archieve" component={Archieve}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
