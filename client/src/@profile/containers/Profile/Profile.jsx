import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FlexWrapp, StyledButton } from './StyledUserProfile';

function Profile() {
	return (
		<Container maxWidth="lg" sx={{ mt: '150px', mb: '100px' }}>
			<Typography variant="h3" sx={{ mb: '141px' }}>
				Welcome, SUZANNE EATON
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<StyledButton to="my-profile">
						<FlexWrapp>
							<PersonOutlineIcon fontSize="large" />
							<div className="content">
								<p className="title">My profile</p>
								<p className="description">Show and update your personal information</p>
							</div>
						</FlexWrapp>
					</StyledButton>
				</Grid>
				<Grid item xs={6}>
					<StyledButton to="purchase-history">
						<FlexWrapp>
							<ShoppingBasketOutlinedIcon fontSize="large" />
							<div className="content">
								<p className="title">Purchase history</p>
								<p className="description">Show and update your personal information</p>
							</div>
						</FlexWrapp>
					</StyledButton>
				</Grid>
				<Grid item xs={6}>
					<StyledButton to="my-wishlist">
						<FlexWrapp>
							<FavoriteBorderIcon fontSize="large" />
							<div className="content">
								<p className="title">My wishlist</p>

								<p className="description">Show and update your personal information</p>
							</div>
						</FlexWrapp>
					</StyledButton>
				</Grid>
				<Grid item xs={6}>
					<StyledButton to="address-book">
						<FlexWrapp>
							<ArticleOutlinedIcon fontSize="large" />
							<div className="content">
								<p className="title">Address book</p>

								<p className="description">Show and update your personal information</p>
							</div>
						</FlexWrapp>
					</StyledButton>
				</Grid>
				<Grid item xs={6}>
					<StyledButton to="/editor/dashboard">
						<FlexWrapp>
							<ArticleOutlinedIcon fontSize="large" />
							<div className="content">
								<p className="title">Edit</p>

								<p className="description">Edit</p>
							</div>
						</FlexWrapp>
					</StyledButton>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Profile;
