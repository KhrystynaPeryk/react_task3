import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCourses } from '../../store/courses/actionCreators';
import { getAllAuthors } from '../../store/authors/actionCreators';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import { buttonText } from '../../constants';

import { authorById } from '../../helpers/authorById';
import { dateGenerator } from '../../helpers/dateGenerator';
import { pipeDuration } from '../../helpers/pipeDuration';

const Courses = () => {
	const [courses, setCourses] = useState([]);
	const [query, setQuery] = useState('');
	const [authorsList, setAuthorsList] = useState([]);
	const [filteredCourses, setFilteredCourses] = useState([]);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const { isAuth } = useSelector((state) => state.user);
	const stateCourses = useSelector((state) => state.courses.courses);
	const stateAuthors = useSelector((state) => state.authors.authors);

	useEffect(() => {
		if (location.state) {
			setCourses((courses) => [...courses, location.state.courseData]);
			setAuthorsList(authorsList.concat(location.state.courseAuthors));
		} else {
			dispatch(getAllCourses()).then((data) => {
				setCourses(data.payload);
			});
			dispatch(getAllAuthors()).then((data) => setAuthorsList(data.payload));
		}
	}, []);

	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	});

	const filterBy = () => {
		const newCourses = stateCourses.filter((course) => {
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
										authors={authorById(authors, stateAuthors)}
									/>
								</div>
							);
					  })
					: stateCourses.map((course) => {
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
										authors={authorById(authors, stateAuthors)}
									/>
								</div>
							);
					  })}
			</div>
		</>
	);
};

export default Courses;
