import * as React from 'react'

import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import BlackPanther from './movies/black-panther';
import IronMan from './movies/iron-man';
import SpiderMan from './movies/spider-man';
import FrontPage from './pages/front-page';




function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<FrontPage />}>
        </Route>

        <Route path="/spiderman/" element={<SpiderMan/>}>
        </Route>
        <Route path="/ironman/" element={<IronMan/>}>
        </Route>
        <Route path="/blackpanther/" element={<BlackPanther/>}>
        </Route>

      </Routes>
  </BrowserRouter>
  );
}

export default App;
