import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CourseInfo = () => {
	const location = useLocation();
	return (
		<div>
			<div>
				<Link className='text-decoration-none text-dark' to='/courses'>
					&#60; Back to courses
				</Link>
			</div>
			<section>
				<h2 className='text-center mb-5'>{location.state.title}</h2>
				<div className='row'>
					<div className='col'>{location.state.description}</div>
					<div className='col'>
						<p>
							<b>ID: </b>
							{location.state.id}
						</p>
						<p>
							<b>Duration: </b>
							{location.state.duration} hours
						</p>
						<p>
							<b>Created: </b>
							{location.state.creationDate}
						</p>
						<p>
							<b>Authors: </b>
							<p>{location.state.authors}</p>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CourseInfo;
