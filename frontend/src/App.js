import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from './pages/AdminPage'

function App() {
  return (
		<div id='page'>
			<BrowserRouter>
				<Routes>
					<Route path="/admin/user" element={<AdminPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
