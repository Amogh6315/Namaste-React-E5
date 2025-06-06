import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // Normal js list which can not be updated dynamically
  // let listOfRes = [
  //   {
  //     data: {
  //       id: "1",
  //       name: "Spice Hub",
  //       rating: 3.5,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg",
  //       cuisine: ["North Indian", "Chinese"],
  //       deliveryTime: "30 mins",
  //       averageCost: "₹300 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "2",
  //       name: "Tandoori Flames",
  //       rating: 4.5,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/aromatic-chicken-biryani-in-a-copper-pot.webp",
  //       cuisine: ["Mughlai", "Biryani"],
  //       deliveryTime: "25 mins",
  //       averageCost: "₹350 for two",
  //     },
  //   },
  // ];

  // so we will use hooks to implement this
  // we will create useState variable
  // whenever state variable update React rerender the component
  // it should be local
  //     const[listOfRes,setListOfRes]=useState([
  //     {
  //     data: {
  //       id: "1",
  //       name: "Spice Hub",
  //       rating: 1.2,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg",
  //       cuisine: ["North Indian", "Chinese"],
  //       deliveryTime: "30 mins",
  //       averageCost: "₹300 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "2",
  //       name: "Tandoori Flames",
  //       rating: 4.5,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/aromatic-chicken-biryani-in-a-copper-pot.webp",
  //       cuisine: ["Mughlai", "Biryani"],
  //       deliveryTime: "25 mins",
  //       averageCost: "₹350 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "3",
  //       name: "Urban Bites",
  //       rating: 3.9,
  //       image:
  //         "https://media.istockphoto.com/id/1389884667/photo/the-juicy-lucy-stuffed-cheeseburger-with-fried-onions.jpg?b=1&s=612x612&w=0&k=20&c=Vh1mszzjDDDNtTTwaMPlIcmUc7MIuXXR69ijREEZbE8=",
  //       cuisine: ["Fast Food", "Burgers"],
  //       deliveryTime: "20 mins",
  //       averageCost: "₹250 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "4",
  //       name: "Green Bowl",
  //       rating: 4.1,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/01/fresh-salmon-salad-with-herbs-and-citrus.png",
  //       cuisine: ["Healthy", "Salads"],
  //       deliveryTime: "35 mins",
  //       averageCost: "₹400 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "5",
  //       name: "Curry Kingdom",
  //       rating: 4.3,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/2023/08/grilled-crispy-pork-with-rice.jpg",
  //       cuisine: ["South Indian", "Andhra"],
  //       deliveryTime: "28 mins",
  //       averageCost: "₹320 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "6",
  //       name: "Dragon Delight",
  //       rating: 4.0,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/vibrant-vegetable-rice-stir-fry-delight.webp",
  //       cuisine: ["Chinese", "Thai"],
  //       deliveryTime: "32 mins",
  //       averageCost: "₹280 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "7",
  //       name: "Pizza Crust",
  //       rating: 4.6,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/2023/12/cutting-pizza.jpg",
  //       cuisine: ["Italian", "Pizza"],
  //       deliveryTime: "22 mins",
  //       averageCost: "₹450 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "8",
  //       name: "Bombay Sandwich Co.",
  //       rating: 3.8,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/2023/05/avocado-bacon-bagel.jpg",
  //       cuisine: ["Street Food", "Snacks"],
  //       deliveryTime: "18 mins",
  //       averageCost: "₹200 for two",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "9",
  //       name: "Wrap It Up",
  //       rating: 4.1,
  //       image:
  //         "https://www.foodiesfeed.com/wp-content/uploads/2023/08/chicken-avocado-wraps.jpg",
  //       cuisine: ["Mexican", "Wraps"],
  //       deliveryTime: "24 mins",
  //       averageCost: "₹270 for two",
  //     },
  //   }]);

  // now i will use mockdata
  const [listOfRes, setListOfRes] = useState(resList);
  const [filteredResturant, setFilteredResturant] = useState(listOfRes);

  const [searchText, setSearchText] = useState("");

  // below code is commented because api is not working
  // now to fetch data from api
  // we can follow 2 option
  // 1. load -> api -> render
  // 2. load -> render -> api -> render
  // we'll use 2nd approch and for that we'll use hook "useEffect"

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  // currently api is not working so just assume
  //   const fetchData = async () => {
  //     const data = await fetch("https://www.swiggy.com/api");

  // we recive data in string so convert it to json
  // const json = await data.json();
  // console.log(json);

  // to update the data in real time with the fetch data
  // given the path of actual api
  // setListOfRes(json.data.cards[2].data.data.cards);

  // to handle data in good way we will do optional chaining
  //     setListOfRes(json?.data?.cards[2]?.data?.data?.cards);
  //   };

  // so till the api get data it will show blank which is bad UX
  // we can add a loading screen which is old
  // if(listOfRes.length === 0 )
  // {
  //     return (<h1>Loading</h1>)
  // }

  // In Latest, we use shimmer UI
  // this is called conditional rendering
  // if(listOfRes.length === 0 )
  // {
  //     return <Shimmer/>
  // }

  // we can also write in tirnary operator
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1>Looks Offline!!! Please check your Internet Connection</h1>;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 mr-0 p-4 ">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the resturat card and update the UI
              const filteredResturantList = listOfRes.filter((res) => {
                return res.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filteredResturantList);
              setFilteredResturant(filteredResturantList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 ml-0 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-1 rounded-lg bg-gray-100"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.data.rating > 4
              );
              console.log(filteredList);
              setFilteredResturant(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-baseline">
        {filteredResturant.map((resturant) => (
          <Link key={resturant.data.id} to={"resturant/" + resturant.data.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
