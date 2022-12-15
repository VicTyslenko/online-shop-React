
import { Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
	return (
		<Container>
			<Grid container spacing={2} sx={{ justifyContent: 'space-between', padding: '0px 137px' }}>
				<div>
					<Typography variant="h4" sx={{ fontSize: 24, mb: '39px', color: '#fff' }}>HELP</Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '19px' }}>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Frequently asked questions
					</Link>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Contact
					</Link>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						How to purchase
					</Link>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Payment
					</Link>
                    </div>
				</div>
				<div>
					<Typography variant="h4" sx={{ fontSize: 24, mb: '39px', color: '#fff' }}>FOLLOW US</Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '19px' }}>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Facebook
					</Link>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Instagram
					</Link>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Pinterest
					</Link>
                    </div>
				</div>
				<div>
					<Typography variant="h4" sx={{ fontSize: 24, mb: '39px', color: '#fff' }}>COMPANY</Typography>
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '19px' }}>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						History of the brand
					</Link>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Policy
					</Link>
					<Link underline="none" href="https://www.google.com/webhp?authuser=1" variant="h6" sx={{ fontSize: 18, color: '#fff' }}>
						Work with Us
					</Link>
                    </div>
				</div>
			</Grid>
		</Container>
	);
}

export default Footer;
