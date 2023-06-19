import React from 'react';
import { Navigate } from 'react-router-dom';
import SideMenuItem from './SideMenuItem';
import { sideMenuItems } from '../../utils/sideMenuItems';
import DashboardHeader from './DashboardHeader';

interface PrivateRouteProps {
	component: React.ComponentType<any>;
}

const Dashboard = ({ component: Component }: PrivateRouteProps) => {
	const isAuthenticated = sessionStorage.getItem('isAuthenticated');

	if (isAuthenticated !== 'true') {
		return <Navigate to='/' />;
	}

	return (
		<div className='grid grid-cols-2 h-screen'>
			<div className='fixed col-span-1'>
				<DashboardHeader />
				<div className='bg-gray-800 text-white w-64 flex-none p-4 h-screen'>
					<div className='mt-8'>
						{sideMenuItems.map((item) => (
							<SideMenuItem key={item.title} icon={item.icon} title={item.title} path={item.path} />
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='col-span-2'>
				<div className='flex justify-center my-4'>
					<h1 className='text-3xl font-bold'>Wephco Admin Dashboard</h1>
				</div>
				<Component />
			</div>
		</div>
	);
};

export default Dashboard;
