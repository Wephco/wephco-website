import useAlertModal from '../../hooks/useAlertModal';
import Modal from '../../utils/Modal';

const AlertModal = () => {
	const alert: any = useAlertModal();

	return (
		<Modal
			isOpen={alert.isOpen}
			onClose={alert.close}
			content={alert.content}
			variant={alert.variant}
		/>
	);
};

export default AlertModal;
