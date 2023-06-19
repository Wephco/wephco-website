import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext, AppContextType } from '../../context/AppContext';
import SideMenuItem from './SideMenuItem';
import { sideMenuItems } from '../../utils/sideMenuItems';

interface PrivateRouteProps {
	component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
	const { isAuthenticated } = useContext(AppContext) as AppContextType;

	if (!isAuthenticated) {
		return <Navigate to='/' />;
	}

	return (
		<div className='flex h-screen'>
			{/* Sidebar */}
			<div>
				{/* Logo */}
				<div className='flex items-center justify-center h-14 bg-gray-800'>
					<div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-blue-500'>
						<img src='/wephcoLogo.ico' alt='Wephco Logo' className='w-8 h-8' />
					</div>
				</div>
				<div className='bg-gray-800 text-white w-64 flex-none p-4 h-screen'>
					{/* Menu */}
					<div className='mt-8'>
						{sideMenuItems.map((item) => (
							<SideMenuItem key={item.title} icon={item.icon} title={item.title} path={item.path} />
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='flex flex-col flex-grow p-8'>
				<div className='flex justify-center my-5'>
					<h1 className='text-3xl font-bold'>Wephco Admin Dashboard</h1>
				</div>
				<Component />
			</div>
		</div>
	);
};

export default PrivateRoute;
