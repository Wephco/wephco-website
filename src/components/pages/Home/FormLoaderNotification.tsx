// FormLoaderNotification.tsx
import React from 'react';

interface FormLoaderNotificationProps {
	notification: string;
	showNotification: boolean;
	variant: string;
	close: () => void;
}

const FormLoaderNotification: React.FC<FormLoaderNotificationProps> = ({
	notification,
	showNotification,
	variant,
	close,
}) => {
	if (!showNotification) {
		return null;
	}

	if (showNotification) {
		setTimeout(() => {
			close();
		}, 5000);
	}

	return (
		<div className='toast toast-top toast-end cursor-pointer z-50' onClick={close}>
			<div className={`alert alert-${variant}`}>
				<span className='text-white'>{notification}</span>
			</div>
		</div>
	);
};

export default FormLoaderNotification;
