const FoodCard = ({item}) => {
  const {name, image, price, recipe} = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className="bg-gray-800 text-white p-2 absolute top-0 right-0 mt-5 mr-5 rounded-lg">${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
