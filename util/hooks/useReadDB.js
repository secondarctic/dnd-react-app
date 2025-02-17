import { useEffect, useState } from 'react';
import { callDatabase } from '../appwrite/callDatabase';

const useReadDB = () => {
	const [characterInfo, setCharacterInfo] = useState([]);

	useEffect(() => {
		const data = callDatabase();
		const documents = data.documents;
		setCharacterInfo(documents);
	});

	return [characterInfo];
};

export default useReadDB;
