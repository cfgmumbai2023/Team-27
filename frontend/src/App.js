import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserPage from '../src/UserPage';
function App() {
  return (
    <div>
      <Router>
      <Routes>
            <Route exact path="/userpage" element={ <UserPage />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
