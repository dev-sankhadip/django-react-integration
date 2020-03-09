import React, { useState, Fragment } from 'react';
import { Grid, Form, Segment, Button } from 'semantic-ui-react';

import Axios from '../../axios/axios';
import { HeaderComponent } from './AuthHeader';


export const Signup = (props: any) => {
    interface IUser {
        username: string;
        email: string;
        password: string;
    }
    interface submitFunc {
        (e: React.FormEvent<HTMLFormElement>): void
    }

    const [user, setUser] = useState<IUser>({ username: '', email: '', password: '' });

    const submit: submitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
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
                                    <input placeholder="Enter your username" value={user?.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder="Enter your email" value={user?.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder="Enter your password" value={user?.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
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