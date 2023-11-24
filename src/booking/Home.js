import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "../slices/authSlice";

const Home = () => {
  const userInfo = useSelector((state)=> state.auth)
  const dispatch = useDispatch();

  const handleClick=()=>{
    dispatch(loggedInUser(userInfo))
    console.log('clicked', userInfo);
    // console.log()
  }
  useEffect(()=>{
    console.log('useeffect called')
  }, [])
  return (
    <div className="container mx-auto p-5 text-center">
      {/* {console.log(userInfo)} */}
      <h1 className="text-5xl">Home {JSON.stringify(userInfo)}</h1>

      <button onClick={()=>handleClick()}>Click</button>
    </div>
  );
};

export default Home;
