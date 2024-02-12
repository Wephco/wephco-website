// FormLoaderNotification.tsx
import React, { useState, useEffect } from 'react';

interface FormLoaderNotificationProps {
	isLoading: boolean;
	showNotification: boolean;
}

const FormLoaderNotification: React.FC<FormLoaderNotificationProps> = ({
	isLoading,
	showNotification,
}) => {
	const [notificationVisible, setNotificationVisible] = useState(false);

	useEffect(() => {
		if (showNotification) {
			setNotificationVisible(true);

			// Auto-close notification after 30 seconds
			const notificationTimeout = setTimeout(() => {
				setNotificationVisible(false);
			}, 30000);

			return () => clearTimeout(notificationTimeout);
		}
	}, [showNotification]);

	return (
		<div>
			{isLoading && (
				// Add your loader/spinner elements or use a library
				<div id='loader' style={{ display: isLoading ? 'block' : 'none' }}>
					Loading...
				</div>
			)}

			{notificationVisible && (
				<div id='notification'>
					Information successfully received. A representative will reach out to you.
				</div>
			)}
		</div>
	);
};

export default FormLoaderNotification;
