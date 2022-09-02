import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import { v4 as uuidv4 } from 'uuid';

import {
	mockedCoursesList,
	buttonText,
	mockedAuthorsList,
} from '../../constants';

import { authorById, getAuthorsArr } from '../../helpers/authorById';
import { dateGenerator } from '../../helpers/dateGenerator';
import { pipeDuration } from '../../helpers/pipeDuration';
import { formatDate } from '../../helpers/dateGenerator';

const Courses = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [query, setQuery] = useState('');
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [filteredCourses, setFilteredCourses] = useState([]);

	const navigate = useNavigate();
	const location = useLocation();
	const { isAuth } = useSelector((state) => state.user);

	useEffect(() => {
		if (location.state) {
			console.log(location.state);
			const newAuthorsList = location.state.courseAuthors;
			const authorsListConcatsNew = authorsList.concat(newAuthorsList);
			const courseData = {
				id: uuidv4(),
				title: location.state.title,
				description: location.state.description,
				creationDate: formatDate(new Date()),
				duration: +location.state.duration,
				authors: getAuthorsArr(newAuthorsList),
			};
			setCourses((courses) => [...courses, courseData]);
			setAuthorsList(authorsListConcatsNew);
		}
	}, [location.state]);

	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	});

	const filterBy = () => {
		const newCourses = courses.filter((course) => {
			if (
				course.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
			) {
				return course;
			} else if (
				course.id.toLocaleLowerCase().includes(query.toLocaleLowerCase())
			) {
				return course;
			} else {
				return null;
			}
		});
		setFilteredCourses(newCourses);
	};

	const displayCreateCourse = () => {
		setQuery('');
		navigate('/courses/add');
	};

	return (
		<>
			<div className='row'>
				<div className='col'>
					<SearchBar
						onClick={() => filterBy()}
						onChange={(event) => setQuery(event.target.value)}
						value={query}
					/>
				</div>
				<div className='col d-flex flex-row-reverse align-items-center'>
					<Button
						buttonText={buttonText.courses}
						onClick={displayCreateCourse}
						type='button'
					/>
				</div>
			</div>
			<div>
				{query
					? filteredCourses.map((course) => {
							const {
								id,
								title,
								description,
								creationDate,
								duration,
								authors,
							} = course;
							return (
								<div key={id}>
									<CourseCard
										id={id}
										title={title}
										description={description}
										creationDate={dateGenerator(creationDate)}
										duration={pipeDuration(duration)}
										authors={authorById(authors, authorsList)}
									/>
								</div>
							);
					  })
					: courses.map((course) => {
							const {
								id,
								title,
								description,
								creationDate,
								duration,
								authors,
							} = course;
							return (
								<div key={id}>
									<CourseCard
										id={id}
										title={title}
										description={description}
										creationDate={dateGenerator(creationDate)}
										duration={pipeDuration(duration)}
										authors={authorById(authors, authorsList)}
									/>
								</div>
							);
					  })}
			</div>
		</>
	);
};

export default Courses;
