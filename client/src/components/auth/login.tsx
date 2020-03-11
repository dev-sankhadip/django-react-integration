import React, { useState, Fragment } from 'react';
import { Grid, Segment, Form, Button, FormProps, Message } from 'semantic-ui-react';

import Axios from '../../axios/axios';
import { HeaderComponent } from './AuthHeader';

import { Validator } from '../../validators/validator';

let LoginForm = new Validator({ email: "", password: "" })

export const Login = (props: any) => {

    interface submitFunc {
        (e: React.FormEvent<HTMLFormElement>, data: FormProps): void
    }

    const [force, setForce] = useState(0);

    const submit: submitFunc = async (e: React.FormEvent<HTMLFormElement>, data: FormProps) => {
        const { email, password } = LoginForm.fields;
        try {
            const res = await Axios.post('/api/auth/signup', { email, password });
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <Fragment>
            <Grid columns={3} divided>
                <Grid.Row style={{ marginTop: 50 }}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Segment raised>
                            <HeaderComponent name="Login" />
                            <Form onSubmit={submit}>
                                <Form.Field>
                                    <label>Email</label>
                                    <input
                                        placeholder="Enter your email"
                                        value={LoginForm.fields['email']}
                                        name="email"
                                        data-index={0}
                                        onChange={(e) => {
                                            setForce(force => force + 1)
                                            LoginForm.requiredOnChnage(e)
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1)
                                            LoginForm.requiredOnBlur(e)
                                        }}
                                    />
                                </Form.Field>
                                {LoginForm.touchedField[0] === false ? <Message color="red">Email is required</Message> : null}
                                <Form.Field>
                                    <label>Password</label>
                                    <input
                                        placeholder="Enter your password"
                                        value={LoginForm.fields['password']}
                                        name="password"
                                        data-index={1}
                                        onChange={(e) => {
                                            setForce(force => force + 1)
                                            LoginForm.requiredOnChnage(e)
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1)
                                            LoginForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                {LoginForm.touchedField[1] === false ? <Message color="red">Password is required</Message> : null}
                                <Button disabled={LoginForm.isFormValid()}>Login</Button>
                                <p onClick={() => { props.history.push('/signup') }} style={{ float: 'right', fontWeight: 'bold' }}>Click to Signup</p>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}