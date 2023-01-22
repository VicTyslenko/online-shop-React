import styled from 'styled-components';
// import { Input } from '@mui/icons-material';
import Input from '../../components/Input';

export const LoginPageWrapp = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
`;
export const StyledInput = styled(Input)`
&&&{
	padding: 10px 0;
    width: 100%;
}
&&&::placeholder{
    /* padding-left: 15px; */

}
`
export const InputWrapper = styled.div`
position: relative;
& .login-icon{
	position:absolute ;
	top:10px ;
	right:0 ;
}
`
export const PassWrapp = styled.div`
position: relative;
& .eye-icon{
	position:absolute ;
	top: 10px;
	right:0 ;
}
`
export const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	width: 600px;
	
`;
export const ImageWrapp = styled.div`
	display: flex;
	justify-content: center;
	& .image {
		width: 13%;

		height: 20%; 
		clip-path: circle(30px at 32px 35px); 

	}
`;
