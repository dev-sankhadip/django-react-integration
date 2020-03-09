import React, { Fragment } from 'react';
import { Header, Icon } from 'semantic-ui-react';


export const HeaderComponent = (props: any) => {
    return (
        <Fragment>
            <Header as="h2" icon textAlign="center">
                <Icon name="user" circular />
                <Header.Content>{props.name}</Header.Content>
            </Header>
        </Fragment>
    )
}