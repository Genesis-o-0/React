import useFetch from "../../hooks/useFetch";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
export default function Shop() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  return (
    <Loading loading={loading} error={error}>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Loading>
  );
}
