import Stack from '@mui/material/Stack';
import StyledButton from './StyledButton';

export default function BasicButtons() {
	return (
		<Stack spacing={2} direction="row">
			<StyledButton variant="contained">ADD NEW ADDRESS</StyledButton>
		</Stack>
	);
}
