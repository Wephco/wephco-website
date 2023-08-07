import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import PropertyListing from './components/pages/PropertyListing/PropertyListing';
import DiasporaPropertyListing from './components/pages/PropertyListing/DiasporaPropertyListing';
import AddPropertyForm from './components/pages/PropertyListing/AddPropertyForm';
import AddDiasporaProperty from './components/pages/PropertyListing/AddDiasporaProperty';
import AgentTable from './components/pages/Agent/AgentTable';
import AddAgentForm from './components/pages/Agent/AddAgentForm';
import Login from './components/pages/Auth/Login';
import UsersTable from './components/pages/Users/UsersTable';
import CreateUser from './components/pages/Users/CreateUser';

import { AppProvider } from './context/AppContext';

import Dashboard from './components/common/Dashboard';
import AlertModal from './components/common/AlertModal';
import PropertyRequests from './components/pages/PropertyRequests/PropertyRequests';

let notifications = <AlertModal />;

function App() {
	return (
		<>
			<AppProvider>
				<BrowserRouter>
					{notifications}
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/home' element={<Dashboard component={Home} />} />
						<Route path='/property-listings' element={<Dashboard component={PropertyListing} />} />
						<Route
							path='/property-listings/diaspora'
							element={<Dashboard component={DiasporaPropertyListing} />}
						/>
						<Route
							path='/property-listings/add'
							element={<Dashboard component={AddPropertyForm} />}
						/>
						<Route
							path='/diaspora/property-listings/add'
							element={<Dashboard component={AddDiasporaProperty} />}
						/>
						<Route path='/agents' element={<Dashboard component={AgentTable} />} />
						<Route path='/agents/add' element={<Dashboard component={AddAgentForm} />} />
						<Route path='/users' element={<Dashboard component={UsersTable} />} />
						<Route path='/users/add' element={<Dashboard component={CreateUser} />} />
						<Route path='/property-requests' element={<Dashboard component={PropertyRequests} />} />
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</>
	);
}

export default App;
