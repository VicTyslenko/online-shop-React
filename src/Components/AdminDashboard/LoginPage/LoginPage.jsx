// import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../Input/Input';
import Button from '../Button/Button';
// import { BsFillPersonFill, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { AiTwotoneLock } from 'react-icons/ai';
import { FcBusinessman } from 'react-icons/fc';
import './LoginPage.scss';


const LoginPage = () => {

    const formSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className='container'>


            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                onSubmit={(values) => formSubmit(values)}
            >

                <Form>
                    <div className='img-wrapp'>
                        <img className='image' src="/img/admin.png/" alt="" />
                    </div>
                    <div className='form-wrapper'>
                        <div className='input-wrapper'>
                            {/* <BsFillPersonFill className="login-icon" /> */}
                            <FcBusinessman className='login-icon' />

                            <Input type="text" name='login' placeholder='Login' className='login-input' />
                        </div>
                        <div className='pass-wrapp'>
                            <AiTwotoneLock className='lock-icon' />
                            {/* <BsFillEyeFill className="eye-icon" /> */}
                            <Input type='password' name='password' placeholder='Password' className='pass-input' />
                        </div>



                        <Button type='submit' className='confirm-button'>Log in</Button>


                    </div>
                </Form>

            </Formik>

        </div>

    )

}

export default LoginPage

