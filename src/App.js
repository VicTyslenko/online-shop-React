import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';
import theme from './theme';
import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
