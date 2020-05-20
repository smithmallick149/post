import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';


const Navbarrender = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const cr = () => {


  //     }
  return (
    <div>
      <Navbar style={{ backgroundColor: 'DodgerBlue' }} light expand="md">
        <NavbarBrand href="/">Posts</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div className='buttons' style={{ display: "flex", marginLeft: "auto" }}>
                <Link to='/create' className='btn btn-primary'>
                  Create post
            </Link>
              </div>
              {/* <div style={{ display: "flex", }}>
                <Button
                  style={{ marginLeft: "auto", backgroundColor: '#ff2b57' }}
                >
                  <Link to='/create' className='btn btn-primary'>
                    Create post
            </Link>
                </Button>
              </div> */}

            </NavItem>

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarrender;