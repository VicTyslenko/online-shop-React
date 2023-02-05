// import React from 'react'
// const Table = () => {
//     return (
//         <TableWrapp>
//             <h3>Recent Orders</h3>
//         </TableWrapp>
//     )
// }

// export default Table
import * as React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableWrapp } from './StyledTable';

function createData(name, trackingId, date, status) {
	return { name, trackingId, date, status };
}

const rows = [
	createData('Dress', '254', '2 Feb 2022', 'Approved'),
	createData('Jeans', '255', '20 Feb 2022', 'Approved'),
	createData('Hat', '254', '2 Feb 2022', 'Pending'),
	createData('Socks', '254', '2 Feb 2022', 'Approved'),
	createData('Boots', '254', '2 Feb 2022', 'Approved'),
];
const makeStyles = (status) => {
	if (status === 'Approved') {
		return {
			// background: "blue",
			color: 'green',
		};
	}
	return {
		// background: 'grey',
		color: 'red',
	};
};

export default function BasicTable() {
	return (
		<TableWrapp>
			<h3>Recent Orders</h3>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Clothes</TableCell>
							<TableCell align="left">Tracking Id</TableCell>
							<TableCell align="left">Date</TableCell>
							<TableCell align="left">Status</TableCell>
							<TableCell align="left">Details</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="left">{row.trackingId}</TableCell>
								<TableCell align="left">{row.date}</TableCell>
								<TableCell align="left">
									<span className="status" style={makeStyles(row.status)}>
										{row.status}
									</span>
								</TableCell>
								<TableCell align="left">{row.protein}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</TableWrapp>
	);
}
