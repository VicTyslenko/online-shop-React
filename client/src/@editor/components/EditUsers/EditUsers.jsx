import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MainContent, Header, TableCellTitle, TableCellName, TableItem } from './StyledUsers';

function EditUsers() {
	return (
		<Container maxWidth="lg">
			<Header>Users</Header>
			<MainContent>
				<TableContainer component={Paper} sx={{ mt: '40px' }}>
					<Table sx={{ width: '100%' }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<TableCellTitle align="left" colSpan={6}>
									Currently showing all users
								</TableCellTitle>
								<TableCell align="right" colSpan={6}></TableCell>
							</TableRow>
							<TableRow>
								<TableCellName align="left" colSpan={1}>
									#
								</TableCellName>
								<TableCellName align="left" colSpan={2}>
									Name
								</TableCellName>
								<TableCellName align="center" colSpan={2}>
									Role
								</TableCellName>
								<TableCellName align="left" colSpan={4}>
									Email
								</TableCellName>
								<TableCellName align="left" colSpan={2}>
									Action
								</TableCellName>
								<TableCellName align="center" colSpan={2}>
									Date Posted
								</TableCellName>
							</TableRow>
							<TableRow>
								<TableItem align="left" colSpan={1}>
									1
								</TableItem>
								<TableItem align="left" colSpan={2}>
									Mark
								</TableItem>
								<TableItem align="center" colSpan={2}>
									Admin
								</TableItem>
								<TableItem align="left" colSpan={4}>
									admin@gmail.com
								</TableItem>
								<TableItem align="left" colSpan={2}>
									Action
								</TableItem>
								<TableItem align="center" colSpan={2}>
									25.06.2022
								</TableItem>
							</TableRow>
						</TableHead>
					</Table>
				</TableContainer>
			</MainContent>
		</Container>
	);
}

export default EditUsers;
