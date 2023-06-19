import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import PropertyListing from './components/pages/PropertyListing/PropertyListing';
import AddPropertyForm from './components/pages/PropertyListing/AddPropertyForm';
import Login from './components/pages/Auth/Login';

import { AppProvider } from './context/AppContext';

import Dashboard from './components/common/Dashboard';

function App() {
	return (
		<>
			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/home' element={<Dashboard component={Home} />} />
						<Route path='/property-listings' element={<Dashboard component={PropertyListing} />} />
						<Route
							path='/property-listings/add'
							element={<Dashboard component={AddPropertyForm} />}
						/>
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</>
	);
}

export default App;
