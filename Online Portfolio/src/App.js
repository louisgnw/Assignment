import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePortfolio from './pages/HomePortfolio/HomePortfolio';
import About from "./components/home/about";
import Experience from "./components/home/experience";
import Education from "./components/home/education";
import Skills from "./components/home/skills";
import Interests from "./components/home/interests";
import Awards from "./components/home/awards";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
        <div className="row">
          <Sidebar />
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/Experience" component={Experience} />
            <Route path="/Education" component={Education} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Interests" component={Interests} />
            <Route path="/Awards" component={Awards} />
            <Route path="/" component={HomePortfolio} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
