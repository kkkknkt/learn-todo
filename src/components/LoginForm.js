import React, { useState } from 'react';
import LOGO from './monster.svg';
import { MAX_NAME_LENGTH } from '../constants/config';

export default function LoginForm(props) {
	const [name, setName] = useState('');

	return (
		<div className='text-center'>
			<img src={LOGO} alt='LOGO' height='128' width='128' />
			<p className='display-6'>Hi there, Let me know your name.</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (name.trim()) {
						props.logIn(name.trim());
						setName('');
					}
				}}>
				<input
					type='text'
					className='form-control'
					placeholder='Enter your name'
					value={name}
					maxLength={MAX_NAME_LENGTH}
					onChange={(e) => {
						setName(e.target.value);
					}}
					required
				/>
				<br />
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
}
