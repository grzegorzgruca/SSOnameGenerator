import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import FormContainer from "./components/FormContainer/FormContainer"

function App() {
  return (
    <div className='bg-pink-100 w-1/2 mx-auto my-20 p-12 rounded-4xl'>
      <Header />
      <FormContainer />
    </div>
  )
}

export default App
