import React from 'react'
import logo from './logo.svg'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
