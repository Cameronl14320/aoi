import { getAuth, onAuthStateChanged,  } from 'firebase/auth'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../components/form'
import { getUid, RootState } from '../core/state/root-store/store'
import { setUid } from '../core/state/user-state/user-state'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const uid = useSelector((state: RootState) => state.user.uid);
  const auth = getAuth();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      dispatch(setUid(user.uid));
    } else {
      dispatch(setUid(undefined));
    }
  });

  if (uid) {
    return (
      <div>
        <button onClick={() => {auth.signOut()}}>Sign Out</button>
        Logged in
        <button onClick={() => {console.log(uid);}}>Print uid</button>
      </div>
    )
  }
  return (
    <div>
      <Form></Form>
      <button onClick={() => {console.log(uid);}}>Print uid</button>
    </div>
  )
}

export default Home