import React, { Component } from 'react'
import { Input, Menu, MenuItemProps } from 'semantic-ui-react'



interface ClickFunc {
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps): void
}


export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick: ClickFunc = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }): void => {
        this.setState({ activeItem: name })
    }


    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}