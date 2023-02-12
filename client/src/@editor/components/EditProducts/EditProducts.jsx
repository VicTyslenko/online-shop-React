import React, { useState } from 'react';
import dayjs from 'dayjs';
import { MainContent, ContentForm, Header, ContainerWrapp, ButtonWrap, InputTitle } from './StyledEditProducts';
import { Container, TextField, Box, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function EditProducts() {
	const [categories, setCategories] = useState('');
	const [enabled, setEnabled] = useState('');
	const [dataPicker, setDataPicker] = React.useState(dayjs('2023-08-18'));

	const handleEnabled = (event) => {
		setEnabled(event.target.value);
	};

	const handleChange = (event) => {
		setCategories(event.target.value);
	};

	const handleDataPicker = (newValue) => {
		setDataPicker(newValue);
	};

	return (
		<Container maxWidth="lg">
			<ContainerWrapp>
				<ContentForm>
					<Header>Products</Header>
					<MainContent>
						<Box component="form" sx={{ width: '100%', p: '24px' }}>
							<FormControl size="small" fullWidth sx={{ mb: '20px' }}>
								<InputLabel id="select-enabled">Enabled</InputLabel>
								<Select
									labelId="select-enabled"
									id="select-enabled"
									size="small"
									fullWidth
									value={enabled}
									label="Enabled"
									onChange={handleEnabled}
								>
									<MenuItem value="yes">Yes</MenuItem>
									<MenuItem value="no">no</MenuItem>
								</Select>
							</FormControl>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Name"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Current price:"
								type="number"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Previous price:"
								type="number"
							/>
							<FormControl size="small" fullWidth sx={{ mb: '20px' }}>
								<InputLabel id="demo-select-small">Categories</InputLabel>
								<Select
									labelId="demo-select-small"
									id="demo-select-small"
									size="small"
									fullWidth
									value={categories}
									label="Categories"
									onChange={handleChange}
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Image urls"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Quantity:"
								type="number"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Color"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Sizes"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Product url"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Brand"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Manufacturer"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Manufacturer country"
								type="string"
							/>
							<TextField
								sx={{ mb: '20px' }}
								fullWidth
								size="small"
								id="demo-helper-text-misaligned-no-helper"
								label="Seller"
								type="string"
							/>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<MobileDatePicker
									label="Date"
									size="small"
									inputFormat="MM/DD/YYYY"
									value={dataPicker}
									onChange={handleDataPicker}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
						</Box>
					</MainContent>
					<ButtonWrap>
						<Button
							variant="contained"
							color="success"
							onClick={() => {
								onClick();
							}}
						>
							Ok
						</Button>
					</ButtonWrap>
				</ContentForm>
			</ContainerWrapp>
		</Container>
	);
}

export default EditProducts;
