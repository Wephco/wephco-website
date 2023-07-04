import { useContext } from 'react'
import Modal from '../../utils/Modal';
import { AppContext, AppContextType } from '../../context/AppContext';

const AlertModal = () => {
	const { setToastOpen } = useContext(AppContext) as AppContextType;

	return <Modal onClose={() => setToastOpen(false)} />;
};

export default AlertModal;
