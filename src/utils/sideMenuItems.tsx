import {
	BsHouseExclamation,
	BsBuildingCheck,
	BsPersonAdd,
	BsBuildingAdd,
	BsPeopleFill,
	BsChatFill,
} from 'react-icons/bs';

interface SideMenuItem {
	title: string;
	path: string;
	icon: JSX.Element;
}

export const sideMenuItems: SideMenuItem[] = [
	{
		title: 'Home',
		path: '/home',
		icon: <BsHouseExclamation />,
	},
	// {
	// 	title: 'Property Listings',
	// 	path: '/property-listings',
	// 	icon: <BsBuildingAdd />,
	// },
	{
		title: 'Diaspora Property Enquiries',
		path: '/property-listings/diaspora',
		icon: <BsBuildingAdd />,
	},
	{
		title: 'Agents',
		path: '/agents',
		icon: <BsPersonAdd />,
	},
	{
		title: 'Property Requests',
		path: '/property-requests',
		icon: <BsBuildingCheck />,
	},
	{
		title: 'Consultations',
		path: '/consultations',
		icon: <BsChatFill />,
	},
	{
		title: 'Users',
		path: '/users',
		icon: <BsPeopleFill />,
	},
];
