import { TextField } from '@mui/material';

import { SearchWrappAnimate , PaperStyles} from './StyledSearch';

function Search({ active }) {
	return (
		<PaperStyles elevation={4}>
			<SearchWrappAnimate id="example-panel" duration={700} height={active}>
				<TextField sx={{ width: 500 }} id="standard-basic" label="Search for item" variant="standard" />
			</SearchWrappAnimate>
		</PaperStyles>
	);
}

export default Search;
