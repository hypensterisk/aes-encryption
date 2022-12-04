/** @format */

import {
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {faCopyright, faHeart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Container, Nav} from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='mt-auto py-3 bg-primary'>
      <Container fluid>
        <div className='text-center fs-6 text-light'>
          Made With <FontAwesomeIcon icon={faHeart} color='red' /> By
          Hypensterisk
        </div>
        <Nav className='d-flex justify-content-center'>
          <Nav.Link
            className='link-light fs-6 px-3'
            href='https://github.com/hypensterisk'>
            <FontAwesomeIcon icon={faGithub} /> Github
          </Nav.Link>
          <Nav.Link
            className='link-light fs-6 px-3'
            href='https://www.instagram.com/hypensterisk/'>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Nav.Link>
          <Nav.Link
            className='link-light fs-6 px-3'
            href='https://twitter.com/hypensterisk'>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </Nav.Link>
        </Nav>
        <div className='text-center fs-6 text-dark'>
          <FontAwesomeIcon icon={faCopyright} />{' '}
          {new Date().getFullYear().toString()} Hypensterisk, Inc.
        </div>
      </Container>
    </footer>
  )
}
