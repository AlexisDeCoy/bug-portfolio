import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import PrintPortfolio from './views/PrintPortfolio';
import DesignPortfolio from './views/DesignPortfolio';
import PrintDetails from './views/PrintDetails';
import ArtistStatement from './views/ArtistStatement';
import CurriculumVitae from './views/CurriculumVitae';
import Contact from './views/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<PrintPortfolio />} path='/prints/portfolio' />
        <Route element={<DesignPortfolio />} path='/designs/portfolio' />
        <Route element={<PrintDetails />} path='/prints/:id' />
        <Route element={<ArtistStatement />} path='/artist-statement' />
        <Route element={<CurriculumVitae />} path='/curriculum-vitae' />
        <Route element={<Contact />} path='/contact' />
      </Routes>
    </div>
  );
}

export default App;
