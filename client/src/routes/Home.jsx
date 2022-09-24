import React, { Fragment } from 'react'
import { api } from '../api/axios'

const Home = () => {
  const fetchToken = async (reftoken) => {
    let res = await api('GET', 'auth/token', {refreshToken: reftoken})
  }
  return (
    <Fragment>
    </Fragment>
  )
}

export default Home