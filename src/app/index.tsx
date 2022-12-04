/** @format */

import {Route, Routes} from 'react-router-dom'
import {About, Home} from '../routes'
import Footer from './footer'
import Header from './header'
import Main from './main'

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}
