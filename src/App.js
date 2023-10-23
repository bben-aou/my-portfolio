import './index.css';
import Header from './header/Header';


function App() {
  return (
    <div className='w-screen h-screen bg-light-900 flex justify-center items-center'>
      <div className='w-full max-w-[93rem] h-full '>
        <Header />
        
        <div className='w-full h-[88vh] bg-black'>
        </div>
      </div>
    </div>

  );
}

export default App;
