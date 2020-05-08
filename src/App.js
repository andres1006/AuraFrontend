import React, { useEffect, useState } from 'react';
import { Router } from "@reach/router"
import './App.css';
import  ListTests  from './page/listTests';
import  DetailTestPacient  from './page/test';

function App() {
 
  return (
    <Router>
      <ListTests path="/"/>
      <DetailTestPacient path="/detail/:label/:hospital"/>
    </Router>
  );

}


export default App;
