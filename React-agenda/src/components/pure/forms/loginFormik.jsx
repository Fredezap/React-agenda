import { Button } from '@mui/material';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginFormik = ({logInOut, massage}) => {

    const InitialValues = {
        user: '',
        password: ''
    }

    const registerSchema = Yup.object().shape(
        {
        user: Yup.string()
            .required("User is required"),
        password: Yup.string()
            .required("Password is required")
        }
    )

    const ErrorMessageStyle = {
        color: 'red'
    }

    const navigate = useNavigate();

    const register = () => {
        navigate('/register')
    }

    const LoginAndRedirect = () => {
        logInOut()
        navigate('/dashboard')
    }

    return (
        <div>
            {massage ? 'Please log in to see your tasks' : null}
            <h4>Log in</h4>
            <Formik
                initialValues = { InitialValues }

                validationSchema = { registerSchema }

                onSubmit = {async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    LoginAndRedirect()
                }}
            >

            {({
                values,
                errors,
                touched,
                isSubmitting
            }) => (
                <Form>
                    <label htmlFor='user'>User</label>
                    <Field id="user" name="user" placeholder="Your username" type="text"/>

                    {errors.user && touched.user && (<ErrorMessage style={ErrorMessageStyle} component="div" name="user"></ErrorMessage>)}

                    <label htmlFor='password'>Password</label>
                    <Field id="password" name="password" placeholder="Your password" type="password"/>

                    {errors.password && touched.password && (<ErrorMessage style={ErrorMessageStyle} component="div" name="password"></ErrorMessage>)}
                
                    <button type="submit">Login</button>
                    {isSubmitting ? "Sending request" : null}
                </Form>
            )}
            </Formik>
            { 'Not registered? ' }
            <Button variant='contained' onClick={register}>Register</Button>
        </div>
    );
}

export default LoginFormik;
