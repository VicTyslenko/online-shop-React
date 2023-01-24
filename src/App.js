/* eslint-disable no-unused-vars */
import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';
import theme from './theme';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
