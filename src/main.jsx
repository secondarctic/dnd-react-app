import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import CharacterList from '../components/CharacterList.jsx';
import Character from '../components/character/Character.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<CharacterList />}></Route>
			<Route path="characters/:characterID" element={<Character />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
