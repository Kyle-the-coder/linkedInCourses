import { useResource } from "../hooks/useResource";
import { addy } from "../App";

export const ProductInfo = ({ productId }) => {
  const product = useResource(`${addy}/products/${productId}`);
  const { name, price, description, rating } = product || {};

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  );
};
