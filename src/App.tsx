import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

// Component imports
import Home from './components/pages/Home/Home';
import PropertyListing from './components/pages/PropertyListing/PropertyListing';
import { DiasporaPropertyListing } from './components/pages/PropertyListing/DiasporaPropertyListing';
import { PropertyRequest } from './components/pages/PropertyRequest/PropertyRequest';
import ConsultUs from './components/pages/Consultation/ConsultUs';

import { AppProvider } from './context/AppContext';

// styles import
import styles from './components/style';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AlertModal from './components/common/AlertModal';

let notifications = <AlertModal />;

function App() {
	return (
		<div className='bg-white w-full overflow-hidden'>
			<AppProvider>
				<BrowserRouter>
					{/* Navbar */}
					<div className={`${styles.paddingX} ${styles.flexCenter}`}>
						{notifications}
						<div className={styles.boxWidth}>
							<Navbar />
						</div>
					</div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/property-listings' element={<PropertyListing />} />
						<Route path='/diaspora' element={<DiasporaPropertyListing />} />
						<Route path='/consult-us' element={<ConsultUs />} />
						<Route path='/property-request' element={<PropertyRequest />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</AppProvider>
			<div className='fixed bottom-4 right-4'>
				<a href='https://wa.link/3y95d8' target='_blank'>
					<FaWhatsapp className='text-6xl text-green-700' />
				</a>
			</div>
		</div>
	);
}

export default App;
