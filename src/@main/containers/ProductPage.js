import { Container, Grid } from "@mui/material";

function ProductPage () {
return (
	<Container>
		<Grid container spacing={2}>
			<Grid item xs={12} md={8}>12</Grid>
			<Grid item xs={12} md={4}>6</Grid>
		</Grid>
	</Container>
)
}

export default ProductPage;
