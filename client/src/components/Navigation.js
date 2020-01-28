import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const GuestActions = props => {
    return (
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/login">Log In</NavLink>
            </NavItem>
        </Nav>
    )
}

const AuthActions = () => {
    return (
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/friends">The List</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/addfriend">Add Friend</NavLink>
            </NavItem>
        </Nav>
    )
}
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/friends">Friends</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          { localStorage.getItem('token') ? <AuthActions /> : <GuestActions />}
        </Collapse>
      </Navbar>
    )
}

export default Navigation