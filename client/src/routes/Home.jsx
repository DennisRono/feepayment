import React, { Fragment, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { api } from '../api/axios'
import { getJwtToken, getRefreshToken, setJwtToken } from '../includes/session'

const Home = () => {
  let navigate = useNavigate()
  const vToken = async (t, refT) => {
    let ver =  await api('POST', 'auth/verifytoken', {token: t, refreshToken: getRefreshToken()})
    if(ver.type==='Error'){
      return navigate("/auth")
    } else {
      setJwtToken(ver.authToken)
    }
  }
  // check is user is logged in
  const jwtToken = getJwtToken()
  const refTok = getRefreshToken()
  useEffect(()=>{
    if (!jwtToken && !refTok) {
      return navigate("/auth")
    } else {
      vToken(jwtToken)
    }
  }, [jwtToken, navigate])

  return (
    <Fragment>
    </Fragment>
  )
}

export default Home