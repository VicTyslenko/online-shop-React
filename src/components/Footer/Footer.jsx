import { Link } from 'react-router-dom';
import {
	Container,
	Grid,
	Typography,
	useMediaQuery,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';

import { ExpandMore } from '@mui/icons-material';

function Footer() {
	const matches = useMediaQuery('(min-width:969px)');

	if (matches === true) {
		return (
			<Container sx={{ bgcolor: 'black', paddingBottom: '122px' }}>
				<Grid container spacing={2} sx={{ justifyContent: 'space-between', padding: '0px 137px' }}>
					<div style={{ marginBottom: '20px' }}>
						<Typography variant="h4" sx={{ fontSize: 24, mb: '39px', color: '#fff' }}>
							HELP
						</Typography>
						<div style={{ display: 'flex', flexDirection: 'column', rowGap: '19px' }}>
							<Link to="/questions" >
								Frequently asked questions
							</Link>
							<Link to="/contact" >
								Contact
							</Link>
							<Link to="/payment" >
								Payment
							</Link>
						</div>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<Typography variant="h4" sx={{ fontSize: 24, mb: '39px', color: '#fff' }}>
							FOLLOW US
						</Typography>
						<div style={{ display: 'flex', flexDirection: 'column', rowGap: '19px' }}>
							<Link
								to="/"
							>
								Facebook
							</Link>
							<Link
								to="/"
							>
								Instagram
							</Link>
							<Link
								to="/"
							>
								Pinterest
							</Link>
						</div>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<Typography variant="h4" sx={{ fontSize: 24, mb: '39px', color: '#fff' }}>
							COMPANY
						</Typography>
						<div style={{ display: 'flex', flexDirection: 'column', rowGap: '19px' }}>
							<Link to="/history-brand" >
								History of the brand
							</Link>
							<Link to="/policy" >
								Policy
							</Link>
							<Link to="/work-us" >
								Work with Us
							</Link>
						</div>
					</div>
				</Grid>
			</Container>
		);
	}
	if (matches === false) {
		return (
			<Container sx={{ bgcolor: 'black' }}>
				<Grid container spacing={1} sx={{ justifyContent: 'space-between', padding: '0px 16px' }}>
					<div style={{ marginBottom: '20px' }}>
						<Accordion sx={{ bgcolor: 'black', color: 'white' }}>
							<AccordionSummary
								expandIcon={
									<ExpandMore sx={{ fill: 'white', fontSize: '30px', justifyContent: 'start' }} />
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography sx={{ fontSize: '15px' }}>FOLLOW US</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										Facebook
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										Instagram
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										Pinterest
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<Accordion sx={{ bgcolor: 'black', color: 'white' }}>
							<AccordionSummary
								expandIcon={
									<ExpandMore sx={{ fill: 'white', fontSize: '30px', justifyContent: 'end' }} />
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography sx={{ fontSize: '20px' }}>HELP</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ justifyContent: 'end' }}>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										Asked questions
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										Contact
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										How to purchase
									</Link>
								</Typography>
								<Typography>
									<Link
										to="/"
									>
										Payment
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
					<div style={{ marginBottom: '20px' }}>
						<Accordion sx={{ bgcolor: 'black', color: 'white' }}>
							<AccordionSummary
								expandIcon={
									<ExpandMore sx={{ fill: 'white', fontSize: '30px', justifyContent: 'end' }} />
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography sx={{ fontSize: '15px', padding: '0px' }}>COMPANY</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										History of the brand
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										Policy
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										to="/"
									>
										Work with Us
									</Link>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</Grid>
			</Container>
		);
	}
}

export default Footer;
