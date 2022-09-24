import React, { Fragment, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
//import { api } from '../api/axios'
import { getJwtToken } from '../includes/session'

const Home = () => {
  let navigate = useNavigate()
  // check is user is logged in
  const jwtToken = getJwtToken()
  useEffect(()=>{
    if (!jwtToken || jwtToken === 'undefined' || jwtToken === '') {
      return navigate("/auth")
    }
  }, [])

  // const fetchToken = async () => {
  //   let res = await api('GET', 'auth/token', {refreshToken: getRefreshToken})
  // }
  return (
    <Fragment>
    </Fragment>
  )
}

export default Home