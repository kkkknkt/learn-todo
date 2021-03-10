import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LOGIN } from '../constants/routes';
import LOGO from './to-do-list.svg';
import USER_IMG from './user.svg';
import { HOME } from '../constants/routes';
import { SESSION_USER, MAX_NAME_LENGTH } from '../constants/config';

const Navbar = (props) => {
	const sessionUser = sessionStorage.getItem(SESSION_USER) || '';

	const logOut = () => {
		sessionStorage.removeItem(SESSION_USER);
		props.history.push(LOGIN);
	};

	return (
		<nav className='navbar fixed-top navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link to={HOME} className='navbar-brand'>
					<img className='d-inline-block align-top' src={LOGO} alt='LOGO' width='30' height='30' /> Who doesn't do, but TODO
				</Link>

				{sessionUser.trim() && (
					<div className='d-flex'>
						<span className='navbar-text text-light me-2'>
							<img className='d-inline-block align-top' src={USER_IMG} alt='USER' width='24' height='24' />{' '}
							{sessionUser.trim().length > MAX_NAME_LENGTH ? sessionUser.trim().slice(0, MAX_NAME_LENGTH) + '...' : sessionUser.trim()}
						</span>
						<button
							className='btn btn-light'
							onClick={(e) => {
								e.preventDefault();
								logOut();
							}}>
							Logout
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
