import styled from 'styled-components';

export const LoginPageWrapp = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;

	/* .img-wrapp {
		display: flex;
		/* // align-items: center; */
	/* justify-content: center; */

	/* .image {
		width: 20%;
		/* //width: 13%; */

	/* height: 20%; */
	/* // clip-path: circle(20px);
		// clip-path: circle(41px at 45px 48px);
		//clip-path: circle(30px at 32px 35px);
		// border-radius: 50%;
		// background-position: center; */

	/* 
	 .confirm-button {
		padding: 8px;
		grid-column: span 2;
	} */
`;
// export const InputWrapper = styled.div`
//        position:relative ;

// `
// export const PassWrapper = styled.div`
//        position:relative ;

// `
export const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	width: 600px;
`;
// export const FormWrapper = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 10px;
//     width: 600px;

//   & .input-wrapper,
//      .pass-wrapp{
//        position:relative ;
//        & .pass-input,
//           .login-input{
//             padding: 10px 0;
//             width: 100%;
//           }
//          & .login-input::placeholder{
//             padding-left: 15px;

//          }
//          & .pass-input::placeholder{
//             padding-left: 15px;

//          }
//   }
// & .input-wrapper{
//     & .login-icon{
//         position: absolute;
//     top: 10px;
//     left: 1px;
//     }
//    & .pass-wrapp{
//      & .lock-icon{
//         position: absolute;
//         top: 10px;
//      }

//    }
// }
// `
