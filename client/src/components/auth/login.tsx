import React, { useState, Fragment } from 'react';
import { Grid, Segment, Form, Header, Icon, Button, FormProps } from 'semantic-ui-react';

import Axios from '../../axios/axios';

export const Login = (props: any) => {

    interface Email {
        email: string;
    }
    interface Password {
        password: string
    }
    interface inputFunc {
        (e: React.ChangeEvent<HTMLInputElement>, setter: any): void
    }
    interface submitFunc {
        (e: React.FormEvent<HTMLFormElement>, data: FormProps): void
    }

    const [email, setEmail] = useState<Email | null>(null);
    const [password, setPassword] = useState<Password | null>(null);

    const setInputValue: inputFunc = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        setter(e.target.value);
    }

    const submit: submitFunc = async (e: React.FormEvent<HTMLFormElement>, data: FormProps) => {
        try {
            const res = Axios.post('/api/auth/signup', { email, password });
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
                            <Header as="h2" icon textAlign="center">
                                <Icon name="user" circular />
                                <Header.Content>Login</Header.Content>
                            </Header>
                            <Form onSubmit={submit}>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder="Enter your email" value={email?.email} onChange={(e) => { setInputValue(e, setEmail) }} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder="Enter your password" value={password?.password} onChange={(e) => { setInputValue(e, setPassword) }} />
                                </Form.Field>
                                <Button>Login</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )
}