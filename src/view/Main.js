import React from 'react';
import { Route } from 'react-router-dom';

import { URI } from './constants';
import { DashBoard } from './DashBoard';

import './Main.css';


export function Main() {
  return (
    <main className="main">
      <Route exact path={URI.home} component={DashBoard} />
    </main>
  );
}
