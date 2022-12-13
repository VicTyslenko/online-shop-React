import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import NoMatch from './NoMatch';

const Main = React.lazy(() => import('../@main/app'));
const Profile = React.lazy(() => import('../@profile/app'));
const Editor = React.lazy(() => import('../@editor/app'));

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route
					index
					element={
						<React.Suspense fallback={<>...</>}>
							<Main />
						</React.Suspense>
					}
				/>
				<Route
					path="profile"
					element={
						<React.Suspense fallback={<>...</>}>
							<Profile />
						</React.Suspense>
					}
				/>
			</Route>
			<Route
				path="/editor/*"
				element={
					<React.Suspense fallback={<>...</>}>
						<Editor />
					</React.Suspense>
				}
			/>
			<Route path="*" element={<NoMatch />} />
		</Routes>
	);
}

export default AppRoutes;
