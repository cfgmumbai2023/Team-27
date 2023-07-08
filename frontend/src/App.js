import logo from './logo.svg';
import './App.css';
import UserRegisteration from './pages/UserRegisteration';
import CreatorRegisteration from './pages/CreatorRegisteration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/registerStudent' element={<UserRegisteration/>}/>
          <Route path='/registerCreator' element={<CreatorRegisteration/>}/>

        </Routes>

        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
