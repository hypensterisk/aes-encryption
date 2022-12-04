/** @format */

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const container = document.getElementById('root')

const root = createRoot(container as HTMLDivElement)

const children = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={null}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

root.render(children)
