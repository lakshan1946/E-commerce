import React, { useContext } from "react";
import "./NewCollections.css";
import new_collections from "../Assests/new_collections";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {
  const { getNewCollection, list } = useContext(ShopContext);
  console.log(getNewCollection);
  return (
    <div className="new-collections">
      <h1> NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {getNewCollection().map((item, index) => {
          console.log(item._id);
          return (
            <Item
              key={index}
              id={item._id}
              name={item.name}
              image={item.images[0]}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
