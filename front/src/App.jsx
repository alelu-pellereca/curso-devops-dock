import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [backMessage, setBackMessage] = useState(undefined)

  const serviceFetch = async () => {
    const response = await fetch('http://backend:3000/')
    const res = await response.json()
    setBackMessage(res)
  }

  useEffect(() => {
    serviceFetch()
  },[])

  return (
    <>
      {
        backMessage && <h1>{backMessage.message}</h1>
      }
    </>
  )
}

export default App
