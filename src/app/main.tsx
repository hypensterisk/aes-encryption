/** @format */

import {ReactNode} from 'react'
import {Container} from 'react-bootstrap'

export default function Main({children}: {children?: ReactNode}) {
  return (
    <main className='flex-shrink-0'>
      <Container fluid>{children}</Container>
    </main>
  )
}
