import { useState } from "react";
// const User = (props)=>{
// here we can use it like props.name

// below line is called destructure on the go
const User = ({ name }) => {
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>Card From Function</h1>
      <h3>Name : {name}</h3>
      <h3>Location : Ghaziabad</h3>
      <h3>Contact : 9999900000</h3>
      <h3>Count 1 : {count1}</h3>
      <button
          onClick={() => {
            setCount1(count1+1);
          }}
        >
          Count Increase
        </button>
      {/* <h3>Count 2 : {count2}</h3> */}
    </div>
  );
};

export default User;
