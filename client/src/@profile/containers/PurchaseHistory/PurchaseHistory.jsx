import { Container,Typography } from '@mui/material';

function PurchaseHistory() {

	return (
		<Container maxWidth='lg'sx={{
			marginBottom:'50px'
		}}>
			<Typography variant="h4" sx={{ mb: '141px' }}>No purchase were found </Typography>
		</Container>
	)
}

export default PurchaseHistory
