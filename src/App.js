import './App.css';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import MainPage from './containers/MainPage/MainPage';
import CartPage from './containers/CartPage/CartPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Wrapper>
          <Switch>
            <Route path='/home'>
              <MainPage />
            </Route>
            <Route path='/cart'>
              <CartPage />
            </Route>
            <Route path='/'>
              <MainPage />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </>

  );
}

export default App;
