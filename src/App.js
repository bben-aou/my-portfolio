import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className='w-screen h-screen bg-light-900 flex justify-center items-center'>
      <div className='w-full max-w-[93rem] h-full '>
        
        {/* <div className='w-full h-[88vh] bg-black'>
        </div> */}
        <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='*' element={<h1>404 PAGE NOT FOUND !</h1>}/>
            </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;
