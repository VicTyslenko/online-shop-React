import React from 'react';
// import { IoCloseSharp } from 'react-icons/io5';
import {
	ButtonModalsWrap,
	ButtonItem,
	ModalWrapWindow,
	ModalContent,
	Header,
	MainContent,
	CloseIcon,
} from './StyledModal';

function Modal({ title, closeModal, children, onClick }) {
	return (
		<ModalWrapWindow onClick={closeModal}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<Header>
					{title}
					<CloseIcon>{/* <IoCloseSharp fontSize={28} onClick={closeModal} /> */}</CloseIcon>
				</Header>
				<MainContent>{children}</MainContent>
				<ButtonModalsWrap>
					<ButtonItem
						variant="contained"
						color="success"
						onClick={() => {
							onClick();
							closeModal();
						}}
					>
						Ok
					</ButtonItem>
					<ButtonItem variant="outlined" color="error" onClick={closeModal}>
						Cancel
					</ButtonItem>
				</ButtonModalsWrap>
			</ModalContent>
		</ModalWrapWindow>
	);
}

export default Modal;
