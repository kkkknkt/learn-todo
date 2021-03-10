import React, { useState } from 'react';
import { MODAL_TYPE } from '../constants/config';
import MainLayout from '../layouts/MainLayout';
import AddTodo from '../components/AddTodo';
import TodoLists from '../components/TodoLists';
import { InfoModal, EditModal } from '../components/TodoModal';

const Home = (props) => {
	const [modalType, setModalType] = useState(null);
	const [isModalActvie, setIsModalActvie] = useState(false);

	const toggleModal = (type) => {
		setModalType(type);
		setIsModalActvie(!isModalActvie);
	};

	const renderModal = () => {
		if (isModalActvie) {
			switch (modalType) {
				case MODAL_TYPE.INFO:
					return <InfoModal isModalActvie={isModalActvie} setIsModalActvie={setIsModalActvie} />;
				case MODAL_TYPE.EDIT:
					return <EditModal isModalActvie={isModalActvie} setIsModalActvie={setIsModalActvie} />;
				default:
					break;
			}
		}
	};

	return (
		<MainLayout isProtectRoute={true}>
			<div className='pt-4'>
				<AddTodo />
				<hr className='py-1' />
				<TodoLists toggleModal={toggleModal} />
				{isModalActvie && renderModal()}
			</div>
		</MainLayout>
	);
};

export default Home;
