import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import resList from "../utils/mockData";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  // we are not doing this because we dont have api so I'll work with my mock data
  const { resId } = useParams();
  // console.log(resId);
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

  // console.log(resList);
  const { name, cuisine, averageCost } = resList[resId - 1].data;
  const category = resList[resId - 1].data.menu;
  // console.log(category);

  // const recommendedItemList = resList[resId - 1].data.menu.Recommended;
  // const newItemList = resList[resId - 1].data.menu.newlyAdded;
  // const shakeItemList = resList[resId - 1].data.menu.Shakes;
  // const snackItemList = resList[resId - 1].data.menu.Snacks;

  const [showIndex, setShowIndex] = useState(0);

  return (
    <div className="text-center font-bold ">
      <h1 className="my-10">Name: {name}</h1>
      <p>
        {cuisine} - Rs. {averageCost}
      </p>
      {Object.entries(category).map((c, index) => (
        <ResturantCategory
          data={c}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
          key={index}
        />
      ))}
      {/* <ul>
        itemList.map(item =>(
        <li key={item.cards[1].data.id}>
          {item.cards[1].data.name} - Rs.{" "}
          {item.cards[1].data.price / 100 ||
            item.cards[1].data.defaultPrice / 100}
        </li>
        ))
      </ul> */}
    </div>
  );
};
export default ResturantMenu;
