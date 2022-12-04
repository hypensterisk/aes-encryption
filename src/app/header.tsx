/** @format */

import {faHome, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'
const logo = new URL('/src/assets/logo-512.png', import.meta.url).toString()

export default function Header() {
  const activeKey = useLocation().pathname
  return (
    <header>
      <Navbar
        bg='primary'
        collapseOnSelect
        expand='lg'
        sticky='top'
        variant='dark'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img
              alt=''
              src={logo}
              width={32}
              height={32}
              className='d-inline-block align-top'
            />{' '}
            AES Encryption
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav activeKey={activeKey} className='ms-auto'>
              <Nav.Link as={Link} to='/' eventKey='/'>
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link as={Link} to='/about' eventKey='/about'>
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
