
import Cover from "./shared/Cover";

// eslint-disable-next-line react/prop-types
const Categories = ({ items = [], coverImg, title}) => {
  return (
    <div className="w-4/5 mx-auto">
     { title && <Cover coverImg={coverImg} title={title}></Cover>}
      <div>
        {items.map((menuItem) => (
          <div
            className="bg-gray-100 px-2 py-2 mt-5 text-green-600"
            key={menuItem.id}
          >
            <h2>{menuItem.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
