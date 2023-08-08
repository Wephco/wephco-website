import React from 'react';
import { Modal, Button } from 'react-daisyui';

const ModalPrompt = ({
	// ref,
	header,
	content,
	onClick,
}: {
	ref?: React.RefObject<HTMLDialogElement>;
	header: string;
	content: string;
	onClick: Function;
}) => {
	const handleClick = () => {
		onClick();
	};

	const { Dialog } = Modal.useDialog();

	return (
		<Dialog>
			<Button size='sm' color='ghost' shape='circle' className='absolute right-2 top-2'>
				X
			</Button>
			<Modal.Header className='mt-10'>{header}</Modal.Header>
			<Modal.Body>{content}</Modal.Body>
			<Modal.Actions className='flex justify-between'>
				<Button className='btn-error'>NO</Button>
				<Button className='btn-success' onClick={handleClick}>
					YES
				</Button>
			</Modal.Actions>
		</Dialog>
	);
};

export { ModalPrompt };
