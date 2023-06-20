import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component imports
import Home from './components/pages/Home/Home';
import PropertyListing from './components/pages/PropertyListing/PropertyListing';

import { AppProvider } from './context/AppContext';

// styles import
import styles from './components/style';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
	return (
		<div className='bg-white w-full overflow-hidden'>
			{/* Navbar */}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={styles.boxWidth}>
					<Navbar />
				</div>
			</div>

			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/property-listings' element={<PropertyListing />} />
					</Routes>
				</BrowserRouter>
			</AppProvider>

			<Footer />
		</div>
	);
}

export default App;
