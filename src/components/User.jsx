import { useEffect, useState } from "react";
import useUserInfo from "../utils/useUserInfo";
// const User = (props)=>{
// here we can use it like props.name

// below line is called destructure on the go
const User = () => {
  // const [count1,setCount1] = useState(0);
  // const [count2,setCount2] = useState(1);

  // instead of this i'll create custom hooks
  // const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch("https://api.github.com/users/amogh6315");
  //   const json = await data.json();
  //   console.log(json);
  //   setUserInfo(json);
  // };

  // using custom hook here
  const userInfo = useUserInfo();


  const { name, location, avatar_url, bio } = userInfo || {};

  return (
    <div className="user-card">
      {/* <h1>Card From Function</h1> */}
      <img src={avatar_url} alt="" />
      <h3>Name : {name}</h3>
      <h3>Location : {location}</h3>
      <h3>Bio : {bio}</h3>
      {/* <h3>Count 1 : {count1}</h3>
      <button
          onClick={() => {
            setCount1(count1+1);
          }}
        >
          Count Increase
        </button> */}
      {/* <h3>Count 2 : {count2}</h3> */}
    </div>
  );
};

export default User;
