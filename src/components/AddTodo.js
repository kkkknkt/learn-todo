import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MAX_TODO_TITLE_LENGTH } from '../constants/config';
import firebase, { Timestamp } from '../services/firebase';

export default function AddTodo() {
	const todosRef = firebase.database().ref('todos');
	const [title, setTitle] = useState('');

	const handleFormSubmit = () => {
		if (title.trim()) {
			todosRef
				.push({ title: title, status: 'T', createdBy: sessionStorage.getItem('user'), createdAt: { '.sv': 'timestamp' } })
				.then(() => {
					console.log('Successfully Added');
				})
				.catch((error) => {
					console.log(error);
				});
			setTitle('');
		}
	};

	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>
					<FontAwesomeIcon icon={faPlus} /> Add New To-Do
				</h5>
				<form
					className='row'
					onSubmit={(e) => {
						e.preventDefault();
						handleFormSubmit();
					}}>
					<div className='col-sm-10'>
						<p>title: {title}</p>
						<input
							value={title}
							onChange={(event) => {
								setTitle(event.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='What will you do today?'
							aria-label='What will you do today?'
							maxLength={MAX_TODO_TITLE_LENGTH}
							required
						/>
					</div>
					<div className='col-sm-2'>
						<div className='d-grid gap-2'>
							<button type='submit' className='btn btn-primary'>
								Add
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
