import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { SearchWrappAnimate, PaperStyles, ButtonSearch } from './StyledSearch';

function Search({ active }) {
	return (
		<PaperStyles elevation={4}>
			<SearchWrappAnimate id="example-panel" duration={700} height={active}>
				<form>
					<TextField sx={{ width: 500 }} id="standard-basic" label="Search for item" variant="standard" />
					<ButtonSearch type="button" aria-label="search">
						<SearchIcon />
					</ButtonSearch>
				</form>
			</SearchWrappAnimate>
		</PaperStyles>
	);
}

export default Search;
