import './App.css';
import {Route, Switch, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import React, {useEffect} from 'react';
import LandingPage from './pages/LandingPage';
import PreferencesPage from './pages/PreferencesPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path={'/'} exact >
          <LandingPage />
        </Route>
        <Route path={'/preferences'}>
          <PreferencesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
