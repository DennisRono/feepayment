import React, { Fragment, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { api } from '../api/axios'
import { getJwtToken } from '../includes/session'

const Home = () => {
  let navigate = useNavigate()
  const vToken = async (t) => {
    let ver =  await api('POST', 'auth/verifytoken', {token: t})
    if(ver.type !== 'success'){
      // use refresh token to fetch new token
      return navigate("/auth")
    }
  }
  // check is user is logged in
  const jwtToken = getJwtToken()
  useEffect(()=>{
    if (!jwtToken || jwtToken === 'undefined' || jwtToken === '') {
      return navigate("/auth")
    } else {
      vToken(jwtToken)
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