import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { clearMovies, setMovies } from './redux/actions/moviesActions';
import { collection, getDocs } from '@firebase/firestore';
import db from './firebase';
import PageNotFound from './components/PageNotFound';

const App = () => {
  const movies = useSelector(state => state.allMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMovies());
    getDocs(collection(db, "movies")).then(querySnapshot => {
      let tempMovies = null;
      querySnapshot.forEach(doc => {
        tempMovies = { id: doc.id, ...doc.data() };
        dispatch(setMovies(tempMovies));

      });
      return () => {
        dispatch(clearMovies());
      }
    })
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/detail/:id'>
          <Detail />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
