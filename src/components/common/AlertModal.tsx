import { useContext } from 'react';
import { AppContext, AppContextType } from '../../context/AppContext';
import Modal from '../../utils/Modal';

const AlertModal = () => {
	const { setToastOpen } = useContext(AppContext) as AppContextType;

	return <Modal onClose={() => setToastOpen(false)} />;
};

export default AlertModal;
