import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../service/getproducts";
import Product from "../Product/Product";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts(`https://fakestoreapi.com/products/${id}`).then((product) => {
      setProduct(product);
    });
  });

  return (
    <>
      <Product key={product.id} {...product} />
    </>
  );
}
