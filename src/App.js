import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/favorites" exact component={Favorites}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

