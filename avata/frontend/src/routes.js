import React from 'react';
import login from './pages/login';
import home from './pages/home';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Route, Routes, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/login" component={login} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/home" component={home} />
      </Routes>
    </div>
  );
};