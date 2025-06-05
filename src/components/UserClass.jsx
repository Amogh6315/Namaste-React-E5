import React from "react";
class UserClass extends React.Component {
  constructor(props) {

    super(props);
    // to use hooks we have to make it, previously there were no hooks
    this.state = {
        userInfo:{
            name:"dummy",
            location:"dummy",
            avatarUrl:""
        }
    //   count1: 0,
    //   count2: 1,
    };
        // console.log(this.props.name+"This is child Constructor");
  }
  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/amogh6315");
    const json = await data.json();

    this.setState({
        userInfo:json
    })
    // console.log(this.props.name+"This is child component did Mount");
  }
  render() {
   
    // const { name, location } = this.props;
    // const { count1, count2 } = this.state;
    const {name,location,avatar_url,bio} = this.state.userInfo
    //  console.log(name+"this is child Render");
    return (
      <div className="user-card">
        <h1>Card From Class</h1>
        {/* <h3>Name : {this.props.name}</h3> */}
        {/* or we can destructure above for neat code */}
        <img src={avatar_url} alt="" />
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Bio : {bio}</h3>
        {/* <h3>Count 1 : {count1}</h3> */}
        {/* <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* not using because it looks messy */}
        {/* <h3>Count 2 : {count2}</h3> */}
      </div>
    );
  }
}
export default UserClass;
