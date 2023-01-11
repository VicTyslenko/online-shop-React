import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';
import theme from './theme';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppRoutes />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
