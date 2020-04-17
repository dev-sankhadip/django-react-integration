import React, { Component } from 'react'
import { Input, Menu, MenuItemProps } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface ClickFunc {
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps): void
}


class Navbar extends Component<RouteComponentProps> {
    state = { activeItem: 'new' }

    handleItemClick: ClickFunc = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }): void => {
        this.setState({ activeItem: name })
        this.props.history.push(`/${name}`)
    }


    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='new'
                    active={activeItem === 'new'}
                    onClick={this.handleItemClick}
                    
                />
                <Menu.Item
                    name='deleted'
                    active={activeItem === 'deleted'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='todos'
                    active={activeItem === 'todos'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={()=>{
                            window.localStorage.removeItem("token");
                            this.props.history.push('/')
                        }}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}


export default withRouter(Navbar);