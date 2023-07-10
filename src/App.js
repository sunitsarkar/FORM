
import './App.css';
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom';
import Page from './component/page';
import { useState } from 'react';
import Page2 from './component/page2';
import Third from './component/third';
import Four from './component/four';

function App() {

  

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/second' element={<Page2/>}/>
        <Route path='/third' element={<Third/>}/>
        <Route path='/four' element={<Four/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
