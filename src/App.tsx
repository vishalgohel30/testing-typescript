import React, { Suspense } from 'react';
import './App.css';
import Routes from './Routes/Route';


function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes />
    </Suspense>
  );
}

export default App;
