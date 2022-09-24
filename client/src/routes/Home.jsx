import React, { Fragment } from 'react'
//import { api } from '../api/axios'
import { getJwtToken } from '../includes/session'

const Home = () => {
  // check is user is logged in
  const jwtToken = getJwtToken();
  if (!jwtToken) {
    
  }

  // const fetchToken = async () => {
  //   let res = await api('GET', 'auth/token', {refreshToken: getRefreshToken})
  // }
  return (
    <Fragment>
    </Fragment>
  )
}

export default Home