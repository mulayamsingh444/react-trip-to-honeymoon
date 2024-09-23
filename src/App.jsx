import { useState } from 'react'
import Header from './components/Header'
import MainHeader from './components/MainHeader'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <MainHeader />
   <Outlet />
   </>
  )
}

export default App
