import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
export default function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <>
      <Loading loading={loading} error={error}>
        <Product key={product.id} {...product} />
      </Loading>
    </>
  );
}
