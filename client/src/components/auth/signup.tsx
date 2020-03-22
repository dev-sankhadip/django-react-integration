import React, { useState, Fragment } from 'react';
import { Grid, Form, Segment, Button, Message } from 'semantic-ui-react';

import Axios from '../../axios/axios';
import { HeaderComponent } from './AuthHeader';
import { Validator } from '../../validators/validator';

let SignupForm = new Validator({ username: "", email: "", password: "", cpassword: "" });

export const Signup = (props: any) => {

    interface submitFunc {
        (e: React.FormEvent<HTMLFormElement>): void
    }

    interface ErrorMessage {
        msg: string;
        color?: any;
    }

    const [force, setForce] = useState(0);
    const [perror, setPerror] = useState<boolean>(false);
    const [err, setErr] = useState<ErrorMessage>({ msg: "", color: "" });

    const submit: submitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log(SignupForm)
        const { username, email, password } = SignupForm.fields;
        e.preventDefault();
        try {
            const res = await Axios.post('/api/auth/signup', { username, email, password });
            SignupForm.emptyForm();
            setForce(force => force + 1)
            console.log(res);
            setErr({ msg: "Successfully Signedup", color: "green" })
        }
        catch (err) {
            console.log(err);
            setErr({ msg: "Signup Failed, Try again", color: "red" })
        }
    }

    return (
        <Fragment>
            <Grid columns={3} divided>
                <Grid.Row style={{ marginTop: 50 }}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Segment raised>
                            {err.msg ? <Message color={err.color}>{err.msg}</Message> : null}
                            <HeaderComponent name="Signup" />
                            <Form onSubmit={submit}>
                                <Form.Field>
                                    <label>Username</label>
                                    <input
                                        placeholder="Enter your username"
                                        value={SignupForm.fields['username']}
                                        name="username"
                                        data-index={0}
                                        onChange={(e) => {
                                            setForce(force => force + 1)
                                            SignupForm.requiredOnChnage(e);
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1);
                                            SignupForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                {SignupForm.touchedField[0] === false ? <Message color="red">Username is required</Message> : null}
                                <Form.Field>
                                    <label>Email</label>
                                    <input
                                        placeholder="Enter your email"
                                        value={SignupForm.fields['email']}
                                        name="email"
                                        data-index={1}
                                        onChange={(e) => {
                                            setForce(force => force + 1)
                                            SignupForm.requiredOnChnage(e);
                                            SignupForm.validateEmail(e);
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1);
                                            SignupForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                {SignupForm.touchedField[1] === false ? <Message color="red">Email is required</Message> : null}
                                { console.log(SignupForm.ValidationError[1]) }
                                {SignupForm.ValidationError[1] === false ? <Message color="red">Invalid Email</Message> : null}
                                <Form.Field>
                                    <label>Password</label>
                                    <input
                                        placeholder="Enter your password"
                                        value={SignupForm.fields['password']}
                                        name="password"
                                        data-index={2}
                                        onChange={(e) => {
                                            setForce(force => force + 1)
                                            SignupForm.requiredOnChnage(e);
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1);
                                            SignupForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                {SignupForm.touchedField[2] === false ? <Message color="red">Password is required</Message> : null}
                                <Form.Field>
                                    <label>Confirm Password</label>
                                    <input
                                        placeholder="Confirm password"
                                        value={SignupForm.fields['cpassword']}
                                        name="cpassword"
                                        data-index={3}
                                        onChange={(e) => {
                                            setForce(force => force + 1)
                                            SignupForm.requiredOnChnage(e);
                                            setPerror(SignupForm.confirmPassword(e))
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1);
                                            SignupForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                {SignupForm.touchedField[3] === false ? <Message color="red">Confirm Password is required</Message> : null}
                                {perror ? <Message color="red">Password didn't match</Message> : null}
                                <Button disabled={SignupForm.isFormValid()}>Signup</Button>
                                <p onClick={() => { props.history.push('') }} style={{ float: 'right', fontWeight: 'bold' }}>Click to Login</p>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}