import { createContext } from 'react'
import { BrowserRouter, Routes,  Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"

export const TestContext = createContext('')

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={"teste"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  )
}

export default App
