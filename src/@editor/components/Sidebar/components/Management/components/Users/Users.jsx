import React,{useEffect, useState} from 'react';
import {
	Container,
	TextField,
	Box, FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormGroup,
	Checkbox,
	FormControlLabel} from '@mui/material';

import {ButtonAddRole, TableCellTitle, TableCellName, InputTitle} from "./StyledUsers"

import {MdVisibilityOff, MdVisibility} from 'react-icons/md'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import Modal from "../../../../../Modal";


const Users = () => {

	const [modalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Container>
			<h1>User</h1>
			<TableContainer component={Paper} sx={{mt: "40px"}}>
				<Table sx={{ width: "100%"}} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCellTitle align="left" colSpan={6}>
								Currently showing all users
							</TableCellTitle>
							<TableCell align="right" colSpan={6}>
								<ButtonAddRole sx={{mr:2}} variant="contained" color="primary">
									All Users
								</ButtonAddRole>
								<ButtonAddRole variant="contained" color="primary" onClick={() => setModalOpen(true)}>
									Add New
								</ButtonAddRole>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCellName align="left" colSpan={1}>#</TableCellName>
							<TableCellName align="left" colSpan={2}>Name</TableCellName>
							<TableCellName align="center" colSpan={2}>Role</TableCellName>
							<TableCellName align="left" colSpan={4}>Email</TableCellName>
							<TableCellName align="left" colSpan={2}>Action</TableCellName>
							<TableCellName align="center" colSpan={2}>Date Posted</TableCellName>
						</TableRow>
						<TableBody>
						</TableBody>
					</TableHead>
				</Table>
			</TableContainer>

			{modalOpen &&
				<Modal
					title="Add User"
					closeModal={() => setModalOpen(false)}
				>
					<Box
						component="form"
					>
						<InputTitle>Name</InputTitle>
						<TextField sx={{mb: "22px"}} fullWidth size="small" id="demo-helper-text-misaligned-no-helper" label="Name" />

						<InputTitle>Email</InputTitle>
						<TextField sx={{mb: "22px"}} fullWidth size="small" id="demo-helper-text-misaligned-no-helper" label="Email" />

						<InputTitle>Phone Number</InputTitle>
						<TextField sx={{mb: "22px"}} fullWidth size="small" id="demo-helper-text-misaligned-no-helper" label="Phone Number" />

						<InputTitle>Password</InputTitle>
						<FormControl sx={{ mb: "22px" }}  size="small" variant="outlined" fullWidth>
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={showPassword ? 'text' : 'password'}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showPassword ? <MdVisibility /> : <MdVisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
						<InputTitle>Assing Permissions</InputTitle>
						<FormGroup>
							<FormControlLabel control={<Checkbox color="default"/>} label="create users" />
							<FormControlLabel control={<Checkbox color="default"/>} label="edit user" />
							<FormControlLabel control={<Checkbox color="default"/>} label="view user" />
							<FormControlLabel control={<Checkbox color="default"/>} label="modify role" />
							<FormControlLabel control={<Checkbox color="default"/>} label="modify permission" />
						</FormGroup>
					</Box>
				</Modal>
			}
		</Container>
	);
};

export default Users;
