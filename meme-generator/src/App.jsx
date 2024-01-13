import React from 'react'
import { Header } from './components/Header'
import { Meme } from './components/Meme'


function App() {
  return (
    <div>     
      <Header title="Meme Generator" />
      <Meme />
    </div>
  )
}

export default App