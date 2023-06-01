import { BsHouseExclamation, BsBuildingCheck, BsPersonBadge, BsBuildingAdd } from 'react-icons/bs';

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
	{
		title: 'Property Listings',
		path: '/property-listings',
		icon: <BsBuildingAdd />,
	},
	{
		title: 'Agents',
		path: '/agents',
		icon: <BsPersonBadge />,
	},
	{
		title: 'Hotel Requests',
		path: '/hotel-requests',
		icon: <BsBuildingCheck />,
	},
];
