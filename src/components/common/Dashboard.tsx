import { Route } from 'react-router-dom';
import SideMenuItem from './SideMenuItem';
import { sideMenuItems } from '../../utils/sideMenuItems';
import Home from '../pages/Home/Home';

const Dashboard = () => {
	return (
		<div className='flex h-screen'>
			{/* Sidebar */}
			<div>
				{/* Logo */}
				<div className='flex items-center justify-center h-14 bg-white'>
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
			<div className='flex-grow p-8'>
				{/* Add content based on path */}
				<Route path='/home' element={<Home />} />
			</div>
		</div>
	);
};

export default Dashboard;
