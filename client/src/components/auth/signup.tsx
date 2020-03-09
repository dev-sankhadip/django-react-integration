import React,{ useState, Fragment } from 'react';
import { Grid, Form, Segment, Button } from 'semantic-ui-react';

import Axios from '../../axios/axios';
import { HeaderComponent } from './AuthHeader';


export const Signup=(props:any)=>
{
    interface IUser{
        username:string;
        email:string;
        password:string;
    }
    interface InputFunc{
        (e:React.ChangeEvent<HTMLInputElement>, setter:any):void
    }
    const [ user, setUser ]=useState<IUser | null>(null);
    return(
        <Fragment>
            <Grid columns={3} divided>
                <Grid.Row style={{ marginTop: 50 }}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Segment raised>
                            <HeaderComponent name="Signup" />
                            <Form>
                                <Form.Field>
                                    <label>Username</label>
                                    <input placeholder="Enter your username" value={user?.username} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder="Enter your email" value={user?.email} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder="Enter your password" value={user?.password} />
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