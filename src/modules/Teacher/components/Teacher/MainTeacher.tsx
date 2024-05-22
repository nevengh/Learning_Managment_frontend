import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const MainTeacher = () => {
  return (
    <Container>
        <Outlet/>
    </Container>
  )
}

export default MainTeacher