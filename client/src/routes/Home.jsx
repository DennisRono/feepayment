import React, { Fragment, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { api } from '../api/axios'
import { getJwtToken, getRefreshToken, setJwtToken } from '../includes/session'

const Home = () => {
  let navigate = useNavigate()

  const nRefTok = async () => {
    let nToken =  await api('GET', 'auth/token', {refreshToken: getRefreshToken()})
    if(nToken.type==='Error'){
      return navigate("/auth")
    } else {
      setJwtToken(nToken.authToken)
    }
  }

  const vToken = async (t, refT) => {
    let ver =  await api('POST', 'auth/verifytoken', {token: t, refreshToken: getRefreshToken()})
    if(ver.type !== 'success'){
      // use refresh token to fetch new token
      setTimeout(() => {
        nRefTok()        
      }, 5000);
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
  }, [jwtToken, navigate])

  // const fetchToken = async () => {
  //   let res = await api('GET', 'auth/token', {refreshToken: getRefreshToken})
  // }
  return (
    <Fragment>
    </Fragment>
  )
}

export default Home