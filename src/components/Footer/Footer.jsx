import {
	Container,
	Grid,
	Typography,
	Link,
	useMediaQuery,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Footer() {
	const matches = useMediaQuery('(min-width:969px)');

	if (matches === true) {
		return (
			<Container sx={{ bgcolor: 'black', paddingBottom: '82px', paddingTop: '20px' }}>
				<Grid container spacing={2} sx={{ justifyContent: 'space-between', padding: '0px 137px' }}>
					<div style={{ marginBottom: '20px' }}>
						<Typography variant="h4" sx={{ fontSize: 24, mb: '39px', color: '#fff' }}>
							HELP
						</Typography>
						<div style={{ display: 'flex', flexDirection: 'column', rowGap: '19px' }}>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
								Frequently asked questions
							</Link>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
								Contact
							</Link>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
								How to purchase
							</Link>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
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
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
								Facebook
							</Link>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
								Instagram
							</Link>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
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
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
								History of the brand
							</Link>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
								Policy
							</Link>
							<Link
								underline="none"
								href="https://www.google.com/webhp?authuser=1"
								variant="h6"
								sx={{ fontSize: 18, color: '#fff' }}
							>
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
			<Container sx={{ bgcolor: 'black'}}>
				<Grid container spacing={1} sx={{ justifyContent: 'space-between', padding: '0px 16px' }}>
					<div style={{ marginBottom: '20px'}}>
						<Accordion sx={{ bgcolor: 'black', color: 'white' }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon sx={{ fill: 'white', fontSize: '25px', justifyContent: 'start' }} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography sx={{ fontSize: '15px' }}>FOLLOW US</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
									>
										Facebook
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
									>
										Instagram
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
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
								expandIcon={<ExpandMoreIcon sx={{ fill: 'white', fontSize: '25px', justifyContent: 'end' }} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography sx={{ fontSize: '15px', }}>HELP</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ justifyContent: 'end' }}>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
									>
										Asked questions
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
									>
										Contact
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
									>
										How to purchase
									</Link>
								</Typography>
								<Typography>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
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
								expandIcon={<ExpandMoreIcon sx={{ fill: 'white', fontSize: '25px', justifyContent: 'end' }} />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography sx={{ fontSize: '15px', padding: '0px' }}>COMPANY</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
									>
										History of the brand
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
									>
										Policy
									</Link>
								</Typography>
								<Typography sx={{ marginBottom: '10px' }}>
									<Link
										underline="none"
										href="https://www.google.com/webhp?authuser=1"
										variant="h6"
										sx={{ fontSize: 18, color: 'white' }}
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
