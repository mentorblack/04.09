import React, { useEffect } from 'react';

const Default: React.FC = () => {
	useEffect(() => {
		// Chuyển hướng đến google.com
		window.location.href = 'https://www.google.com';
	}, []);

	return (
		<h1 className='flex min-h-svh items-center justify-center text-center text-9xl text-red-500'>
			????
		</h1>
	);
};

export default Default;
