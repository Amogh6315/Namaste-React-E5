const ResturantCard = (prop) => {
  const { resData } = prop;
  const { name, cuisine, rating, deliveryTime, averageCost, image } =
    resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{averageCost}</h4>
    </div>
  );
};

export default ResturantCard;
