import React from 'react'
import { Container, LoginWrapper, HeadWrapp, Description } from './StyledLoginOverlayPage'
import TextField from '@mui/material/TextField';
const LoginOverlayPage = () => {
  return (
    <Container>
      <LoginWrapper>
        <HeadWrapp>
          <div className="login-wrapp">
            <p className='login'>Login</p>
            <hr />
          </div>
          <p>Registration</p>
        </HeadWrapp>
        <Description>Please enter your account details to log in</Description>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </LoginWrapper>
    </Container>
  )
}

export default LoginOverlayPage