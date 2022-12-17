import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Management from './Management/Management';
// import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          displayEmpty
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value='' disabled>Manegement</MenuItem>
          <Link to="/management">
            <Management />
          </Link>
            <MenuItem value={20}>Roles</MenuItem>
          <Link>

            <MenuItem value={30}>Users</MenuItem>
          </Link>
        </Select>
      </FormControl>
    </Box>
  );
}
