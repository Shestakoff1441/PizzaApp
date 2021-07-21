import Header from './components/Header/Header';
import { connect } from 'react-redux';
import Wrapper from './components/Wrapper/Wrapper';
import MainPage from './containers/MainPage/MainPage';
import CartPage from './containers/CartPage/CartPage';
import { setShoppingCart } from './redux/shoppingCart/actions';
import { getLocalStorageData } from './utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';

const App = (props) => {
  useEffect(() =>{
    props.setShoppingCart(getLocalStorageData());
  }, [])
  // localStorage.clear();
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

const mapStateToProps = state => ({
  shoppingCart: state.shoppingReducer
});
const mapDispatchToProps = dispatch => ({
  setShoppingCart: (data) => dispatch(setShoppingCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
