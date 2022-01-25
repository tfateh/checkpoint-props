import Header from './profile/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './profile/Students';
import {employers} from './profile/data.js';
import React from 'react';

function App() {
  const Done=(x)=>{
return alert (`hello ${x}`) 
  };
  return (
    <React.Fragment>
      <Header/>
      <Students employers={employers} Done={Done}/>
      </React.Fragment>
  );
}

export default App;
