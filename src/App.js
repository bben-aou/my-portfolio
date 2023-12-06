import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact';

import { createContext, useState } from 'react';

export const AppContext = createContext();



function App() {

  const [openMenu, setOpenMenu] = useState("Home");
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu, theme, setTheme }}>
      <div className='w-screen h-screen bg-light-900 dark:bg-darkTheme-900 flex justify-center items-center'>
        <div className='w-full max-w-[93rem] h-full '>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>404 PAGE NOT FOUND !</h1>} />
            </Routes>
          </Router>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
