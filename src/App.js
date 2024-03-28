import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import PrintPortfolio from './views/PrintPortfolio';
import PrintDetails from './views/PrintDetails';
import DesignPortfolio from './views/DesignPortfolio';
import DesignDetails from './views/DesignDetails';
// import DesignDetailsTest from './views/DesignDetailsTest';
import CurriculumVitae from './views/CurriculumVitae';
import Contact from './views/Contact';
import Birthday from './views/Birthday';

import './App.css';
import './styles/Details.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Birthday />} path='/happy-birthday' />
        <Route element={<PrintPortfolio />} path='/prints/portfolio' />
        <Route element={<PrintDetails />} path='/prints/:id' />
        <Route element={<DesignPortfolio />} path='/designs/portfolio' />
        <Route element={<DesignDetails />} path='/designs/:id' />
        {/* <Route element={<DesignDetailsTest />} path='/designs/test' /> */}
        <Route element={<CurriculumVitae />} path='/curriculum-vitae' />
        <Route element={<Contact />} path='/contact' />
      </Routes>
    </div>
  );
}

export default App;
