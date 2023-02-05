import React, { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ButtonAddRole, TableCellTitle, TableCellName } from './StyledRoles';

function Roles() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<h1>Roles</h1>
			<TableContainer component={Paper} sx={{ mt: '40px' }}>
				<Table sx={{ width: '100%' }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCellTitle align="left" colSpan={6}>
								Category Table
							</TableCellTitle>
							<TableCell align="right" colSpan={6}>
								<ButtonAddRole variant="contained" color="primary">
									Add new Role
								</ButtonAddRole>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCellName align="left" colSpan={2}>
								ID
							</TableCellName>
							<TableCellName align="left" colSpan={2}>
								Role
							</TableCellName>
							<TableCellName align="center" colSpan={6}>
								Permission
							</TableCellName>
							<TableCellName align="right" colSpan={2}>
								Date Posted
							</TableCellName>
						</TableRow>
						<TableBody />
					</TableHead>
				</Table>
			</TableContainer>
		</Container>
	);
}

export default Roles;
