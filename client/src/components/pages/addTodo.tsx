import React, { Fragment } from 'react';
import { Input, Button } from 'semantic-ui-react';


export const AddTodo = (props: any) => {
    return (
        <Fragment>
            <Input placeholder="Enter todo" />
            <Button>Add</Button>
        </Fragment>
    )
}