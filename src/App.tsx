import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/common/Dashboard';
import Login from './components/pages/Auth/Login';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
