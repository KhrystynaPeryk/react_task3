// import { mockedAuthorsList } from '../constants';

// export const authorFromConstants = (id) => {
// 	try {
// 		const author = mockedAuthorsList.find((el) => el.id === id);
// 		return author.name;
// 	} catch (e) {
// 		return null;
// 	}
// };

// export const authorById = (arrOfIds) => {
// 	const arrOfNames = [];
// 	arrOfIds.map((id) => {
// 		const authorName = authorFromConstants(id);
// 		return arrOfNames.push(authorName);
// 	});
// 	return arrOfNames.join(', ');
// };

export const authorById = (arrOfIds, authorsWithNames) => {
	const arrOfNames = [];
	const authorFromConstants = (id) => {
		try {
			const author = authorsWithNames.find((el) => el.id === id);
			return author.name;
		} catch (e) {
			return null;
		}
	};
	arrOfIds.map((id) => {
		const authorName = authorFromConstants(id);
		return arrOfNames.push(authorName);
	});
	return arrOfNames.join(', ');
};

export const getAuthorsArr = (arrOfObj) => {
	let result = arrOfObj.map((obj) => {
		return obj.id;
	});
	return result;
};
