import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import {useState} from "react";




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
const [listOfRes,setListOfRes]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList = listOfRes.filter((res) => res.data.rating > 4);
            console.log(filteredList);
            setListOfRes(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
