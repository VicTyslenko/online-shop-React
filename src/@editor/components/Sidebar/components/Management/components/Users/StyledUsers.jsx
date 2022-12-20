import {TableCell, Button} from '@mui/material';
import styled from "styled-components";


export const ButtonAddRole = styled(Button)`
	&&&{
		box-shadow: none;
		text-transform: none;
		padding: 6px 12px;
		line-height: 1.5;
		background-color: #0063cc;
	}
`

export const TableCellTitle = styled(TableCell)`
	&&& {
		font-size: 18px;
		font-weight: 600;
		color: #544d4d;
	}
`

export const TableCellName = styled(TableCell)`
	&&& {
		font-size: 15px;
		font-weight: 600;
		color: #2d2d2d;
	}
`

export const InputTitle = styled.div`
	letter-spacing: 0.5px;
	word-spacing: 1px;
	font-size: 17px;
	font-weight: 600;
	margin-bottom: 10px;
`


