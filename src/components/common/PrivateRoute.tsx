import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext, AppContextType } from '../../context/AppContext';

export interface PrivateRouteProps {
	component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
	const { isAuthenticated } = useContext(AppContext) as AppContextType;

	if (isAuthenticated) {
		return <Component />;
	}

	return <Navigate to='/' />;
};

export default PrivateRoute;
