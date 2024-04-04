import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Layers3, Home, Phone, Search } from 'lucide-react';
export default function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='w-100' style={{}}>
      <Navbar expand="md" sticky='bottom' {...args}>
      <Layers3 className='text-warning fs-1 me-1' />
         <NavbarBrand className='text-warning fw-bold fs-2' href="/">WORK CORE 
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className='d-flex align-items-center '>
              <Home className='text-white' style={{height:"20px"}}/>
              <NavLink className='text-light' href="/components/">Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-white' href="#">
              About 
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='text-white' nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Blog page </DropdownItem>
                <DropdownItem>Blog single</DropdownItem>
                <DropdownItem>Email Page</DropdownItem>
                <DropdownItem>Elements </DropdownItem>
                <DropdownItem>Landing Page </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Error Page</DropdownItem>
              </DropdownMenu>
             </UncontrolledDropdown>
             <NavItem>
              <NavLink className='text-white' href="#">
              Contact 
              <Phone style={{height:"15px"}} />
              </NavLink>
            </NavItem>
          </Nav><div>
          <Search className='text-primary bg-light rounded mb-1'/>
          <input className='rounded' style={{outline:"none"}} type="text" placeholder='Search Here....' />
          </div>
        </Collapse>
      </Navbar>
      <hr/>
    </div>
  );
}
