import React, { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';

export function InfoModal(props) {
	const modalRef = useRef();

	const showModal = () => {
		const modalEle = modalRef.current;
		const bsModal = new Modal(modalEle, {
			backdrop: 'static',
			keyboard: false,
		});
		bsModal.show();
	};

	const hideModal = () => {
		const modalEle = modalRef.current;
		const bsModal = Modal.getInstance(modalEle);
		bsModal.hide();
	};

	useEffect(() => {
		props.isModalActvie ? showModal() : hideModal();
	}, [props.isModalActvie]);

	return (
		<div className='modal fade' ref={modalRef} tabIndex='-1'>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Info</h5>
						<button
							type='button'
							className='btn-close'
							onClick={() => {
								hideModal();
								props.setIsModalActvie(false);
							}}
							aria-label='Close'></button>
					</div>
					<div className='modal-body'>...</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={() => {
								hideModal();
								props.setIsModalActvie(false);
							}}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export function EditModal(props) {
	const modalRef = useRef();

	const showModal = () => {
		const modalEle = modalRef.current;
		const bsModal = new Modal(modalEle, {
			backdrop: 'static',
			keyboard: false,
		});
		bsModal.show();
	};

	const hideModal = () => {
		const modalEle = modalRef.current;
		const bsModal = Modal.getInstance(modalEle);
		bsModal.hide();
	};

	useEffect(() => {
		props.isModalActvie ? showModal() : hideModal();
	}, [props.isModalActvie]);

	const handleFormSubmit = () => {};

	return (
		<div className='modal fade' ref={modalRef} tabIndex='-1'>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Edit</h5>
						<button
							type='button'
							className='btn-close'
							onClick={() => {
								hideModal();
								props.setIsModalActvie(false);
							}}
							aria-label='Close'></button>
					</div>
					<div className='modal-body'>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleFormSubmit();
							}}>
							<div className='mb-3'>
								<label className='form-label'>ID</label>
								<input type='text' className='form-control' disabled readOnly />
							</div>
							<div className='mb-3'>
								<label className='form-label'>Title</label>
								<input type='text' className='form-control' required />
							</div>
							<div className='mb-3'>
								<label className='form-label'>Status</label>
								<select className='form-select'>
									<option value=''>Open this select menu</option>
									<option value='1'>One</option>
									<option value='2'>Two</option>
									<option value='3'>Three</option>
								</select>
							</div>
						</form>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={() => {
								hideModal();
								props.setIsModalActvie(false);
							}}>
							Close
						</button>
						<button
							type='button'
							className='btn btn-warning'
							onClick={(e) => {
								e.preventDefault();
								handleFormSubmit();
							}}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
