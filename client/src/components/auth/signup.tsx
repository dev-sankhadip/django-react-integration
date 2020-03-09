import React, { useState, Fragment, useEffect } from 'react';
import { Grid, Form, Segment, Button, Message } from 'semantic-ui-react';

import Axios from '../../axios/axios';
import { HeaderComponent } from './AuthHeader';
import { Validator } from '../../validators/validator';

let SignupForm = new Validator({ username: "", email: "", password: "" });

export const Signup = (props: any) => {
    interface IUser {
        username: string;
        email: string;
        password: string;
    }
    interface ErrorUser {
        username?: boolean;
        email?: boolean;
        password?: boolean;
    }
    interface submitFunc {
        (e: React.FormEvent<HTMLFormElement>): void
    }

    const [user, setUser] = useState<IUser>({ username: '', email: '', password: '' });
    const [force, setForce] = useState(0);
    // const [error, setError] = useState<ErrorUser>({ username: true, email: true, password: true });

    const submit: submitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log(SignupForm)
        const { username, email, password } = user;
        e.preventDefault();
        try {
            const res = await Axios.post('/api/auth/signup', { username, email, password });
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
                            <HeaderComponent name="Signup" />
                            <Form onSubmit={submit}>
                                <Form.Field>
                                    <label>Username</label>
                                    <input
                                        placeholder="Enter your username"
                                        value={user?.username}
                                        name="username"
                                        onChange={(e) => {
                                            setUser({ ...user, username: e.target.value });
                                            // setError({ ...error, username: validator.requiredOnChnage(e) })
                                            SignupForm.requiredOnChnage(e);
                                        }}
                                        // onBlur={(e) => { setError({ ...error, username: validator.requiredOnBlur(e) }); }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1);
                                            SignupForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                {/* {!error.username ? <Message color="red">Username is required</Message> : null} */}
                                {console.log(SignupForm.fields['username'].length)}
                                {SignupForm.fields['username'].length === 0 ? <Message color="red">Username is required</Message> : null}
                                <Form.Field>
                                    <label>Email</label>
                                    <input
                                        placeholder="Enter your email"
                                        value={user?.email}
                                        name="email"
                                        onChange={(e) => {
                                            setUser({ ...user, email: e.target.value });
                                            SignupForm.requiredOnChnage(e);
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1);
                                            SignupForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                {SignupForm.fields['email'].length === 0 ? <Message color="red">Email is required</Message> : null}
                                <Form.Field>
                                    <label>Password</label>
                                    <input
                                        placeholder="Enter your password"
                                        value={user?.password}
                                        name="password"
                                        onChange={(e) => {
                                            setUser({ ...user, password: e.target.value });
                                            SignupForm.requiredOnChnage(e);
                                        }}
                                        onBlur={(e) => {
                                            setForce(force => force + 1);
                                            SignupForm.requiredOnBlur(e);
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Confirm Password</label>
                                    <input placeholder="Confirm password" />
                                </Form.Field>
                                <Button>Signup</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}