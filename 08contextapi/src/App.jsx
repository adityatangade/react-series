import React, { useState } from 'react'
import UserContextProvider from './contexts/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
