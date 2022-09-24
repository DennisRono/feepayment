import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './routes/Home'
import Auth from './routes/Auth'

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <div className="contents">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Fragment>
  )
}

export default App