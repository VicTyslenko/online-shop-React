import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		h3: {
			fontWeight: 700,
			fontSize: '24px',
			lineHeight: '33px',
			textTransform: 'uppercase',
		},
		overline: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '19px',
			color: '#847A7A',
			textTransform: 'uppercase',
		},
		subtitle2: {
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: '22px',
		},
		caption: {
			fontWeight: 600,
			fontSize: '12px',
			lineHeight: '16px',
			color: '#847A7A',
			textDecoration: 'underline',
		},
		body1: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '19px',
			color: '#595959',
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: false,
			},
			styleOverrides: {
				root: {
					borderRadius: 0,
					boxShadow: 'none',
				},
				containedPrimary: {
					background: '#000',
					color: '#fff',
					'&:hover': {
						background: '#565254',
						boxShadow: 'none',
					},
				},
				sizeMedium: {
					// width: '263px',
					height: '45px',
					padding: '16px 20px',
					fontWeight: 400,
					fontSize: '18px',
					lineHeight: '25px',
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: 0,
				},
				sizeMedium: {
					width: '50px',
					height: '45px',
					padding: '16px',
					background: '#000',
					color: '#fff',
					'&:hover': {
						background: '#565254',
					},
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontWeight: 400,
					fontSize: '16px',
					lineHeight: '22px',
					color: '#000',
				},
			},
		},
	},
});

export default theme;
