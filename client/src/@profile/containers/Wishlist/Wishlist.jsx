import { Container, Typography } from '@mui/material';

function Wishlist() {

	return (
		<Container maxWidth='lg'sx={{
			marginBottom:'50px'
		}}>
		<Typography variant="h4" sx={{ mb: '141px' }}>Your wishlist is empty</Typography>
		</Container>
	)
}

export default Wishlist
