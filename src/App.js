import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import SideDrawer from './components/SideDrawer';
import indigo from '@material-ui/core/colors/indigo';

function App() {

  const darkMode = useSelector((state) => state.setting.darkMode);

  const theme = createMuiTheme({
    palette: {
      primary: indigo,
      type: darkMode ? 'dark' : "light",
    },
    status: {
      danger: 'orange',
    },

  });

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
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