import React from 'react';
import { Navigate } from 'react-router-dom';
import SideMenuItem from './SideMenuItem';
import { sideMenuItems } from '../../utils/sideMenuItems';
import DashboardHeader from './DashboardHeader';
import { CiMenuKebab } from 'react-icons/ci';
import { LogoutButton } from './LogoutButton';

interface PrivateRouteProps {
	component: React.ComponentType<any>;
}

const Dashboard = ({ component: Component }: PrivateRouteProps) => {
	const isAuthenticated = sessionStorage.getItem('isAuthenticated');

	if (isAuthenticated !== 'true') {
		return <Navigate to='/' />;
	}

	return (
		<div className='drawer lg:drawer-open'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col mt-10'>
				{/* Page content here */}
				<label htmlFor='my-drawer-2' className='drawer-button lg:hidden'>
					<div className='btn btn-ghost'>
						<CiMenuKebab />
					</div>
				</label>
				<div className='text-center'>
					<h2 className='text-2xl font-bold'>Wephco Admin Dashboard</h2>
				</div>
				<Component />
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
				<DashboardHeader />
				<ul className='menu p-4 w-64 h-screen bg-gray-800 text-base-content'>
					{sideMenuItems.map((item) => (
						<li key={item.title}>
							<SideMenuItem key={item.title} icon={item.icon} title={item.title} path={item.path} />
						</li>
					))}
					<li className='mt-10'>
						<hr />
					</li>
					<li>
						<LogoutButton />
					</li>
				</ul>
				<br />
			</div>
		</div>
		// <div className='container grid grid-cols-3 h-screen'>
		// 	<div className='fixed col-span-1'>
		// 		<DashboardHeader />
		// 		<div className='bg-gray-800 text-white w-64 flex-none p-4 h-screen'>
		// 			<div className='mt-8'>
		// 				{sideMenuItems.map((item) => (
		// 					<SideMenuItem key={item.title} icon={item.icon} title={item.title} path={item.path} />
		// 				))}
		// 			</div>
		// 		</div>
		// 	</div>

		// 	{/* Main Content */}
		// 	<div className='col-span-full'>
		// 		<div className='flex justify-center my-4'>
		// 			<h1 className='text-3xl font-bold'>Wephco Admin Dashboard</h1>
		// 		</div>
		// 		<Component />
		// 	</div>
		// </div>
	);
};

export default Dashboard;
