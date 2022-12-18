import React,{useEffect} from 'react';
import {Container} from '@mui/material';
import {ButtonAddRole, TableCellTitle, TableCellName} from "./StyledUsers"

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';


const Users = () => {

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

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
								<ButtonAddRole variant="contained" color="primary">
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
		</Container>
	);
};

export default Users;
