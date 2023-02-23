import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';
import theme from './theme';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BreadCrumbs from './@main/containers/BreadCrumbs/BreadCrumbs';
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<BreadCrumbs/>
			<AppRoutes />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
