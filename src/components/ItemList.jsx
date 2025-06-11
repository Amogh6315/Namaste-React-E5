const ItemList = ({ items }) => {
//   console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.name}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-full">
            <div className="py-2 flex justify-between">
              <span>{item.name}</span>
              <span className="mr-3"> ₹ {item.price}</span>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-medium">{item.description}</p>
              <button className="bg-black text-white rounded-sm my-1 p-1 cursor-pointer font-medium w-15">+ Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
