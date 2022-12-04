/** @format */

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './app'

const container = document.getElementById('root')

const root = createRoot(container as HTMLDivElement)

const children = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

root.render(children)

if ('serviceWorker' in navigator) {
  const scriptURL = new URL('/src/service-worker.ts', import.meta.url)
  navigator.serviceWorker
    .register(scriptURL, {type: 'module'})
    .then((value) => console.info(value))
    .catch((reason) => console.info(reason))
}
