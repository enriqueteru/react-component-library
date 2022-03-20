import React from 'react';
import { Route, Routes } from 'react-router';

import { Components1 } from './routes';
import './base.scss';
import { NotFound } from './core';
import { Home } from './pages';

function App() {
  return (
    <div>

     <Routes>
       <Route path='/' element={ <Home /> }/>
       <Route path='components-1/*' element={ <Components1 /> }/>
       <Route path='/*' element={ <NotFound />  } />
     </Routes>

    </div>
  );
}

export default App;
