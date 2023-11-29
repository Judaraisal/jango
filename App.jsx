import { useState } from 'react'
import { Menu } from './components/Menu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu></Menu>
    </>
  )
}

export default App
