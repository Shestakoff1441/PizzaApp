import React, { useEffect, useCallback } from 'react';
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
interface IProps {
  setShoppingCart: Function
}
const App: React.FC<IProps> = ({ setShoppingCart }) => {

  const setInitDataStore = useCallback(() => {
    setShoppingCart(getLocalStorageData());
  }, [setShoppingCart]);

  useEffect(() => {
    setInitDataStore()
  }, [setInitDataStore]);


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

const mapDispatchToProps = (dispatch: Function) => ({
  setShoppingCart: (data: object) => dispatch(setShoppingCart(data))
})
export default connect(null, mapDispatchToProps)(App);
