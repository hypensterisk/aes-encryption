/** @format */

import {Card} from 'react-bootstrap'
const notfoundimage = new URL(
  '/src/assets/notfound-image.webp',
  import.meta.url,
).toString()

export default function Notfound() {
  return (
    <Card bg='dark' border='primary' text='light'>
      <Card.Img variant='top' src={notfoundimage} />
      <Card.Body>
        <Card.Title>Page Not Found</Card.Title>
      </Card.Body>
    </Card>
  )
}
