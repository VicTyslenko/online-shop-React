import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { FlexWrapp, StyledButton } from './StyledUserProfile';
import { profileUserSelector } from '../../../@main/store/selectors/profileUserSelector';
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from 'react-redux';


import { clearDataAuth } from '../../../@main/store/slices/authSlice';
import { clearDataRegister } from '../../../@main/store/slices/registrationSlice';

function Profile() {
	const dispatch = useDispatch();

	const clearData = () => {
		dispatch(clearDataAuth());
		dispatch(clearDataRegister());
	};
	const userProfile = useSelector(profileUserSelector);
	const token = userProfile.token;
	const decodedToken = jwt_decode(token);

	return (
		<Container maxWidth="lg" sx={{ mt: '150px', mb: '100px' }}>
			<Typography variant="h3" sx={{ mb: '141px' }}>
				Welcome, {`${decodedToken.firstName} ${decodedToken.lastName}`}
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
							{/* <ArticleOutlinedIcon fontSize="large" />
							 */}
							<EditOutlinedIcon fontSize="large" />
							<div className="content">
								<p className="title">Edit</p>

								<p className="description">Edit</p>
							</div>
						</FlexWrapp>
					</StyledButton>
				</Grid>
				<Grid item xs={6}>
					<StyledButton to="/" onClick={() => clearData()}>
						<FlexWrapp>
							{/* <ArticleOutlinedIcon fontSize="large" />
							 */}
							<ExitToAppIcon fontSize="large" />
							<div className="content">
								<p className="title">Sign out</p>

								<p className="description">Sign out</p>
							</div>
						</FlexWrapp>
					</StyledButton>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Profile;
