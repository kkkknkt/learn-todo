import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { SESSION_USER } from '../constants/config';
import { LOGIN } from '../constants/routes';
import Navbar from '../components/Navbar';

const MainLayout = (props) => {
	const [isFadeActive, setIsFadeActive] = useState(false);

	useEffect(() => {
		setIsFadeActive(true);
	}, []);

	if (props.isProtectRoute === true && !sessionStorage.getItem(SESSION_USER)) {
		props.history.push(LOGIN);
		return null;
	}

	return (
		<>
			<Navbar />
			<div className={isFadeActive ? 'fade show' : 'fade'} style={{ transition: 'opacity 0.5s linear' }}>
				<div className='container' style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
					{props.children && props.children}
				</div>
			</div>
		</>
	);
};

export default withRouter(MainLayout);
