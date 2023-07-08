import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from './pages/AdminPage'
import UserRegisteration from './pages/UserRegisteration';
import CreatorRegisteration from './pages/CreatorRegisteration';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/registerStudent' element={<UserRegisteration/>}/>
          <Route path='/registerCreator' element={<CreatorRegisteration/>}/>
          <Route path='/admin/user' element={<AdminPage/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
