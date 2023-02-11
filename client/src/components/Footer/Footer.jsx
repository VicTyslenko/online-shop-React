import { Link } from 'react-router-dom';
import {
	Container,
	Grid,
	useMediaQuery,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import { StyledText, StyledLink, ContainerWrapper, LinkContainer, ContentWrapp } from './Footer.styles';

import { ExpandMore } from '@mui/icons-material';

function Footer() {
	const matches = useMediaQuery('(min-width:969px)');

	return (
		<ContainerWrapper>
			<Container maxWidth="lg">
				<Grid container spacing={2} sx={{ justifyContent: 'space-between', padding: '0px 137px' }}>
					<ContentWrapp>
						<StyledText>HELP</StyledText>
						<LinkContainer>
							<StyledLink to="/questions">Frequently asked questions</StyledLink>
							<StyledLink to="/contact">Contact</StyledLink>
							<StyledLink to="/payment">Payment</StyledLink>
						</LinkContainer>
					</ContentWrapp>
					<ContentWrapp>
						<StyledText>FOLLOW US</StyledText>
						<LinkContainer>
							<StyledLink to="/">Facebook</StyledLink>
							<StyledLink to="/">Instagram</StyledLink>
							<StyledLink to="/">Pinterest</StyledLink>
						</LinkContainer>
					</ContentWrapp>
					<ContentWrapp>
						<StyledText>COMPANY</StyledText>
						<LinkContainer>
							<StyledLink to="/history-brand">History of the brand</StyledLink>
							<StyledLink to="/policy">Policy</StyledLink>
							<StyledLink to="/work-us">Work with Us</StyledLink>
						</LinkContainer>
					</ContentWrapp>
				</Grid>
			</Container>
		</ContainerWrapper>
	);

	// if (matches === false) {
	// 	return (
	// 		<Container sx={{ bgcolor: 'black' }}>
	// 			<Grid container spacing={1} sx={{ justifyContent: 'space-between', padding: '0px 16px' }}>
	// 				<div style={{ marginBottom: '20px' }}>
	// 					<Accordion sx={{ bgcolor: 'black', color: 'white' }}>
	// 						<AccordionSummary
	// 							expandIcon={
	// 								<ExpandMore sx={{ fill: 'white', fontSize: '30px', justifyContent: 'start' }} />
	// 							}
	// 							aria-controls="panel1a-content"
	// 							id="panel1a-header"
	// 						>
	// 							<Typography sx={{ fontSize: '15px' }}>FOLLOW US</Typography>
	// 						</AccordionSummary>
	// 						<AccordionDetails>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Facebook
	// 								</Link>
	// 							</Typography>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Instagram
	// 								</Link>
	// 							</Typography>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Pinterest
	// 								</Link>
	// 							</Typography>
	// 						</AccordionDetails>
	// 					</Accordion>
	// 				</div>
	// 				<div style={{ marginBottom: '20px' }}>
	// 					<Accordion sx={{ bgcolor: 'black', color: 'white' }}>
	// 						<AccordionSummary
	// 							expandIcon={
	// 								<ExpandMore sx={{ fill: 'white', fontSize: '30px', justifyContent: 'end' }} />
	// 							}
	// 							aria-controls="panel1a-content"
	// 							id="panel1a-header"
	// 						>
	// 							<Typography sx={{ fontSize: '20px' }}>HELP</Typography>
	// 						</AccordionSummary>
	// 						<AccordionDetails sx={{ justifyContent: 'end' }}>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Asked questions
	// 								</Link>
	// 							</Typography>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Contact
	// 								</Link>
	// 							</Typography>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									How to purchase
	// 								</Link>
	// 							</Typography>
	// 							<Typography>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Payment
	// 								</Link>
	// 							</Typography>
	// 						</AccordionDetails>
	// 					</Accordion>
	// 				</div>
	// 				<div style={{ marginBottom: '20px' }}>
	// 					<Accordion sx={{ bgcolor: 'black', color: 'white' }}>
	// 						<AccordionSummary
	// 							expandIcon={
	// 								<ExpandMore sx={{ fill: 'white', fontSize: '30px', justifyContent: 'end' }} />
	// 							}
	// 							aria-controls="panel1a-content"
	// 							id="panel1a-header"
	// 						>
	// 							<Typography sx={{ fontSize: '15px', padding: '0px' }}>COMPANY</Typography>
	// 						</AccordionSummary>
	// 						<AccordionDetails>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									History of the brand
	// 								</Link>
	// 							</Typography>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Policy
	// 								</Link>
	// 							</Typography>
	// 							<Typography sx={{ marginBottom: '10px' }}>
	// 								<Link
	// 									to="/"
	// 								>
	// 									Work with Us
	// 								</Link>
	// 							</Typography>
	// 						</AccordionDetails>
	// 					</Accordion>
	// 				</div>
	// 			</Grid>
	// 		</Container>
	// 	);
	// }
}

export default Footer;
