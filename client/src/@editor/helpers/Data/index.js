
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';




// Sidebar Data
export const SidebarData = [
	{
		icon: HomeOutlinedIcon,
		heading: 'Products',
	},
	{
		icon: ListAltOutlinedIcon,
		heading: 'Shop',
	},
	{
		icon: PeopleAltOutlinedIcon,
		heading: 'Users',
	},
	{
		icon: InventoryOutlinedIcon,
		heading: 'Style-shop',
	},
	{
		icon: InventoryOutlinedIcon,
		heading: 'Orders',
	},
];

// Management Cards Data
export const CardsData = [
	{
		title: 'Sales',
		id: 1,
		color: {
			backGround: 'linear-gradient(180deg, #ff170e 0%, #220736 100%)',
			boxShadow: '0px 10px 20px 0px #e0c6f5',
		},
		barValue: 70,
		value: '25,970',
		png: MonetizationOnOutlinedIcon,
		series: [
			{
				name: 'Sales',
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},

	{
		title: 'Revenue',
		id: 2,
		color: {
			backGround: 'linear-gradient(180deg, #003eed 0%, #27002c  100%)',
			boxShadow: '0px 10px 20px 0px #FDC0C7',
		},
		barValue: 80,
		value: '14,270',
		png: CardMembershipOutlinedIcon,
		series: [
			{
				name: 'Revenue',
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},
	{
		title: 'Expenses',
		id: 3,
		color: {
			backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(0 0 0) -46.42%)',
			boxShadow: '0px 10px 20px 0px #F9D59B',
		},
		barValue: 60,
		value: '4,270',
		png: ListAltOutlinedIcon,
		series: [
			{
				name: 'Expenses',
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
];

