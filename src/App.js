import React, { useEffect, useContext } from 'react';
import GlobelState, { GlobalContext, ACTIONS } from './utils/context/GlobelContext';
import Header from './components/Header';

import "./App.css";

const App = () => {
  //globel state 
  const { globelState, dispatch } = useContext(GlobalContext)
  console.log("🚀 ~ file: App.js:10 ~ App ~ globelState", globelState)

  //useEffect
  useEffect(() => {
    const userDate = {
      name: 'test',
      age: 23,
      profilePic: 'https://picsum.photos/seed/picsum/200/300',
    }
    dispatch({ type: ACTIONS.CACHE_USER_DATA, payload: userDate })
  }, [])

  return (
    <div className="App">
        <Header />
    </div>
  );
}

const MainApp = () => {
  return (
    <GlobelState>
      <App />
    </GlobelState>
  )
}
export default MainApp;
