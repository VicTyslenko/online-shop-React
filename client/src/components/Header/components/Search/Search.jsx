import { TextField } from '@mui/material';

import { SearchWrappAnimate } from './StyledSearch';

function Search({ searchInput }) {
	return (
		<SearchWrappAnimate id="example-panel" duration={700} height={searchInput}>
			<TextField sx={{ width: 500 }} id="standard-basic" label="Search for item" variant="standard" />
		</SearchWrappAnimate>
	);
}

export default Search;
