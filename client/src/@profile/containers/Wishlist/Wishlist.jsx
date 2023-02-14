import { Container, Typography } from '@mui/material';

function Wishlist() {

	return (
		<Container maxWidth='lg'sx={{
			marginTop:'50px',
			marginBottom:'50px',
			display:'flex',
			justifyContent:'center'
		}}>
		<Typography variant="h4" sx={{ mb: '141px' }}>Your wishlist is empty</Typography>
		</Container>
	)
}

export default Wishlist
