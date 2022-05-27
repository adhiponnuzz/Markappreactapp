import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import Studentadd from './component/Studentadd';
import View from './component/View';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Search from './component/Search';

function App() {
  return (
    <>

    <BrowserRouter>

    <Routes>

      <Route path="/" exact element={<Studentadd/>}/>
      <Route path="/view" exact element={<View/>}/>
      <Route path="/search" exact element={<Search/>}/>



    </Routes>
    
    
    
    </BrowserRouter>


  
    
    
    
    
    </>

  );
}

export default App;
