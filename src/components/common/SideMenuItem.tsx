import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface SideMenuItemProps {
	icon: ReactNode;
	title: string;
	path: string;
}

const SideMenuItem = ({ icon, title, path }: SideMenuItemProps) => {
	const navigate = useNavigate();

	return (
		<div
			className='flex items-center text-gray-200 hover:text-white py-2 cursor-pointer active:bg-white rounded-md active:text-gray-800'
			onClick={() => navigate(path)}
		>
			<div className='mr-4'>{icon}</div>
			<span className='text-xl'>{title}</span>
		</div>
	);
};

export default SideMenuItem;
