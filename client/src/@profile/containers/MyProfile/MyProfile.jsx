import { Container, Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Typography } from '@mui/material';

function MyProfile() {
	return (
		<Container
			maxWidth="lg"
			sx={{
				marginBottom: '50px',
				display:'flex',
				justifyContent:'center'
			}}
		 >
			{/* <Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			> */}
				<div>
					<TextField
						id="standard-multiline-flexible"
						label="Email adress"
						multiline
						maxRows={4}
						placeholder="Email"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						id="standard-multiline-flexible"
						label="First Name"
						multiline
						maxRows={4}
						placeholder="Your first name"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						id="standard-multiline-flexible"
						label="Second Name"
						multiline
						maxRows={4}
						placeholder="Your second name"
						variant="standard"
					/>
				</div>
				<div>
					<TextField
						id="standard-multiline-flexible"
						label="Mobile Phone"
						multiline
						placeholder='+38'
						maxRows={4}
						variant="standard"
					/>
				</div>
				<FormControl>
					<RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
						<FormControlLabel value="female" control={<Radio />} label="Male" />
						<FormControlLabel value="male" control={<Radio />} label="Female" />
					</RadioGroup>
				</FormControl>
				<div>

					<TextField
						id="standard-helperText"
						label="Birthday"
						placeholder='Dd/mm/yyyy'
						variant="standard"
					/>
				</div>
			{/* </Box> */}
		</Container>
	);
}

export default MyProfile;
