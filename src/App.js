import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import SideDrawer from './components/SideDrawer';
function App() {
  return (
    <Router>
      <div className="App">
        <PC> <Header /></PC>
        <Mobile><SideDrawer /></Mobile>
        <Switch>
          <Route path="/favorites" exact component={Favorites}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

const PC = styled.div`
@media (max-width: 480px) {
    display: block;
  }
`
const Mobile = styled.div`
@media (min-width: 480px) {
    display: none;
  }
`