import React from 'react'
import { Routes, Route } from 'react-router'
import { Hero1 } from '../components'
import { VassTest } from '../pages'

const Components1 = () => {
  return (
    <Routes>
      <Route path='/' element={ <Hero1 /> }/>
    </Routes>
  )
}

export default Components1