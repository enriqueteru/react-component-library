import React from 'react'
import { Routes, Route } from 'react-router'
import { Hero1, Hero2 } from '../components'


const Components1 = () => {
  return (
    <Routes>
      <Route path='/' element={ <Hero1 /> }/>
      <Route path='/hero2' element={ <Hero2 /> }/>
    </Routes>
  )
}

export default Components1