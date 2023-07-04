import { useContext } from 'react';
import { AppContext, AppContextType } from '../context/AppContext';

const Modal = ({ onClose }: { onClose: () => void }) => {
	const { toastOpen, toastContent } = useContext(AppContext) as AppContextType;

	let icon = <></>;

	if (!toastOpen) {
		return null;
	}

	return (
		<div className='toast toast-end toast-top cursor-pointer'>
			<div className={`alert alert-info`} onClick={onClose}>
				{icon}
				<span>{toastContent}</span>
			</div>
		</div>
	);
};

export default Modal;
