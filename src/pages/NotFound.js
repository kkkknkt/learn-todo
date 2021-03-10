import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function NotFound() {
	return (
		<MainLayout>
			<div className='positon-relative'>
				<div className='position-absolute top-50 start-50 translate-middle'>
					<p className='fs-3'>404 - Page Not Found !</p>
				</div>
			</div>
		</MainLayout>
	);
}
