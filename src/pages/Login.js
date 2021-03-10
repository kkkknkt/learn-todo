import React from 'react';
import { withRouter } from 'react-router-dom';
import { HOME } from '../constants/routes';
import { SESSION_USER, BLOCKQUOTE_CAPTION } from '../constants/config';
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
	const logIn = (name) => {
		sessionStorage.setItem(SESSION_USER, name);
		props.history.push(HOME);
	};

	if (sessionStorage.getItem(SESSION_USER)) {
		props.history.push(HOME);
		return null;
	}

	return (
		<MainLayout>
			<div className='positon-relative'>
				<div className='position-absolute top-50 start-50 translate-middle'>
					<LoginForm logIn={logIn} />
					<br />
				</div>

				<div className='position-absolute bottom-0 start-50 translate-middle-x'>
					<figure className='text-center'>
						<figcaption className='blockquote-footer'>{BLOCKQUOTE_CAPTION}</figcaption>
					</figure>
				</div>
			</div>
		</MainLayout>
	);
};

export default withRouter(Login);
