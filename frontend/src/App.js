import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserPage from '../src/UserPage';
import ContentCreatorPage from './ContentCreatorPage';
import AdminPage from './pages/AdminPage'
import UserRegisteration from './pages/UserRegisteration';
import CreatorRegisteration from './pages/CreatorRegisteration';
import LoginPage from './pages/LoginPage';
import UserTable from './components/UserTable';
import PostTable from './components/PostsTable';
function App() {
  return (
    <div>
      <Router>
      <Routes>
            <Route exact path='/' element={<LoginPage/>}/>
            <Route exact path="/userpage" element={ <UserPage />}/>
            <Route exact path="/contentpage" element={ <ContentCreatorPage />}/>
            <Route exact path='/registerStudent' element={<UserRegisteration/>}/>
          <Route exact path='/registerCreator' element={<CreatorRegisteration/>}/>
          <Route exact path='/admin' element={<AdminPage/>}/>
          <Route exact path='/admin/user' element={<UserTable/>}/>
          <Route exact path='/admin/posts' element={<PostTable/>}/>
          <Route exact path='/LoginPage' element={<LoginPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
