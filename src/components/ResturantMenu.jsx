import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  // we are not doing this because we dont have api so I'll work with my mock data
  const { resId } = useParams();
  console.log(resId);
  // const [resInfo,setResInfo]=useState(null);
  // useEffect(()=>{
  //     fetchData();
  // },[])
  // const fetchData = async ()=>{
  //     const data = await fetch("www.swiggy.com/resturants/api");
  // so to make it dynamic we will use useParams hook
  // const data = await fetch("www.swiggy.com/resturants/"+resId);
  //     const json = await data.json();
  //     setResInfo(json.data);
  // }
  // if (resInfo===null) return <Shimmer/>
  //   const {name,cusine,averageCost}=resInfo;
  // const {itemList}=resInfo.cards[2].data.info;

  return (
    <div>
      {/* <h1>{name}</h1>
      <p>
        {cuisine}
        {averageCost}
      </p>
      <h3>Menu</h3>
      <ul>
        itemList.map(item =>(
        <li key={item.cards[1].data.id}>
          {item.cards[1].data.name} - Rs.{" "}
          {item.cards[1].data.price / 100 ||
            item.cards[1].data.defaultPrice / 100}
        </li>
        ))
      </ul> */}

      <h1>Name of resturant</h1>
      <p>cusine</p>
    </div>
  );
};
export default ResturantMenu;
