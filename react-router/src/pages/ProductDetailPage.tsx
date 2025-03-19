import { Link, useParams } from "react-router-dom";
import { ParamsType } from "../types/types";

const ProductDetailPage = () => {
  const params = useParams<ParamsType>();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to={".."} relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
