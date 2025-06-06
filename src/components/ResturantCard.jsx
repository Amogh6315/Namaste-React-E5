const ResturantCard = (prop) => {
  const { resData } = prop;
  const { name, cuisine, rating, deliveryTime, averageCost, image } =
    resData?.data;
  return (
    // to give particular number we use [] 
    <div className="res-card my-4 p-4 mx-2 w-[235px] rounded-2xl bg-gray-100 hover:bg-gray-300">
      <img className="res-logo w-[220px] h-[220px] rounded-lg" alt="res-logo" src={image} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{averageCost}</h4>
    </div>
  );
};

export default ResturantCard;
