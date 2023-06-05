import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/common/Dashboard';
import Login from './components/pages/Auth/Login';

import { AppProvider } from './context/AppContext';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
	return (
		<>
			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/home' element={<PrivateRoute component={Dashboard} />} />
						<Route path='/property-listings' element={<PrivateRoute component={Dashboard} />} />
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</>
	);
}

export default App;
