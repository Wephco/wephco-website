import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import PropertyListing from './components/pages/PropertyListing/PropertyListing';

import { AppProvider } from './context/AppContext';


function App() {
	return (
		<>
			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/property-listings' element={<PropertyListing />} />	
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</>
	);
}

export default App;
