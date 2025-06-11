import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  //   now to make other accordian collapse themselves we'll implement "lift state up"
  //   const [showItem, setShowItem] = useState(false);
  //   const handleItems = () => {
  // console.log("clicked");
  // setShowItem(!showItem);
  //   };

  const handleItems = () => {
    
    setShowIndex();
  };
  return (
    <div>
      {/* header */}

      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer "
        onClick={handleItems}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data[0]} ({data[1].length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data[1]} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
