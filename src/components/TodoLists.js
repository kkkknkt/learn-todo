import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faInfoCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MODAL_TYPE, MAX_TODO_TITLE_LENGTH } from '../constants/config';

export default function TodoLists(props) {
	const renderTodoTitle = (title) => {
		return title.trim().length > MAX_TODO_TITLE_LENGTH ? title.trim().slice(0, MAX_TODO_TITLE_LENGTH) + '...' : title.trim();
	};

	const renderTodoStatus = (status) => {
		switch (status) {
			case 'T':
				return <span className='fs-6 badge bg-dark'>TODO</span>;
			case 'I':
				return <span className='fs-6 badge bg-primary'>IN PROGRESS</span>;
			case 'D':
				return <span className='fs-6 badge bg-success'>DONE</span>;
			case 'R':
				return <span className='fs-6 badge bg-danger'>CANCELED</span>;
			default:
				break;
		}
	};

	const text =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	const todos = [
		{ title: text, status: 'T', createdBy: 'DEMO' },
		{ title: text, status: 'I', createdBy: 'DEMO' },
		{ title: text, status: 'D', createdBy: 'DEMO' },
		{ title: text, status: 'R', createdBy: 'DEMO' },
	];

	return (
		<div className='table-responsive'>
			<h5 className='card-title'>
				<FontAwesomeIcon icon={faClipboardList} /> To-Do Lists
			</h5>
			<table className='table table-hover align-middle'>
				<tbody>
					{todos.length > 0 ? (
						<>
							{todos.map((item, i) => {
								return (
									<tr className='lh-1' key={i}>
										<td colSpan={1} className='text-start'>
											{renderTodoStatus(item.status)} {renderTodoTitle(item.title)}
											<div id='emailHelp' className='form-text'>
												By {item.createdBy}
											</div>
										</td>
										<td className='text-end'>
											<div className='btn-group'>
												<button
													className='btn btn-info'
													onClick={() => {
														props.toggleModal(MODAL_TYPE.INFO);
													}}>
													<FontAwesomeIcon icon={faInfoCircle} /> <span className='d-none d-lg-inline-block'>Info</span>
												</button>
												<button
													className='btn btn-warning'
													onClick={() => {
														props.toggleModal(MODAL_TYPE.EDIT);
													}}>
													<FontAwesomeIcon icon={faEdit} /> <span className='d-none d-lg-inline-block'>Edit</span>
												</button>
												<button className='btn btn-danger'>
													<FontAwesomeIcon icon={faTrashAlt} /> <span className='d-none d-lg-inline-block'>Remove</span>
												</button>
											</div>
										</td>
									</tr>
								);
							})}
						</>
					) : (
						<p>NO DATA</p>
					)}
				</tbody>
			</table>
			{todos.length > 0 && (
				<button type='button' className='btn btn-danger'>
					<FontAwesomeIcon icon={faTrashAlt} /> Remove All
				</button>
			)}
		</div>
	);
}
