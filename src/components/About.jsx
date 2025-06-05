import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// for understanding I'll create class component of about

// const About = () => {
//   return (
//     <div>
//       <h1>About US</h1>
//       <h2>This is series of namaste react</h2>
//       <User name={"Amogh Gupta(func)"} />
//       <UserClass name={"Amogh(class)"} location={"zila Ghaziabad"}/>
//     </div>
//   );
// };

// important to learn react life cyle which follows
//  parent constructor
//   parent render
// 1 child constructor
// 1 child render
// 2 child constructor
// 2 child render
// 1 child componentDidMount
// 2 child componentDidMount
// parent componentDidMount

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("This is parent Constructor");
  }
  componentDidMount() {
    // console.log("This is parent component did Mount");
  }
  render() {
    // console.log("this is parent Render");
    return (
      <div>
        <h1>About US</h1>
        <h2>This is series of namaste react</h2>
        <UserClass name={"First"} location={"zila Ghaziabad"} />
        {/* commenting below so that we can learn api call */}
        {/* <UserClass name={"Second"} location={"zila Ghaziabad"} />
        <UserClass name={"Third"} location={"zila Ghaziabad"} />
        <UserClass name={"Fourth"} location={"zila Ghaziabad"} /> */}
      </div>
    );
  }
}

export default About;
