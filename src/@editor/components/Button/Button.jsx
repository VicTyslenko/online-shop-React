
import * as React from 'react';
import Button from '@mui/material/Button';
import '../../containers/LoginPage/LoginPage.scss'
export default function LoginButton() {
    return (
     
        <Button className='confirm-button' variant="contained" disableElevation>
            Log in
        </Button>
    );
}