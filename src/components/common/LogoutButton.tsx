import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
	const navigate = useNavigate();

	const logout = () => {
		sessionStorage.setItem('isAuthenticated', 'false');
		navigate('/');
	};

	return (
		<button className='btn btn-ghost text-white' onClick={logout}>
			LOGOUT
		</button>
	);
};

export { LogoutButton };
