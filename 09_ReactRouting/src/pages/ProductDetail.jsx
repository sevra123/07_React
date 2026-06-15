import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

function ProductDetail() {
  const { id } = useParams();

  return (
    <>
      <Navigation />
      <h1>Product ID: {id}</h1>;
    </>
  );
}

export default ProductDetail;
