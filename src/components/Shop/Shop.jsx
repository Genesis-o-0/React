import { useEffect, useState } from "react";
import getproducts from "../../service/getproducts";
import Product from "../Product/Product";

export default function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getproducts("https://fakestoreapi.com/products")
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let productList;
  if (products !== undefined) {
    productList = products.map((product) => {
      return <Product key={product.id} {...product} />;
    });
  }
  return <div className="row row-cols-4 pt-5 row-gap-5">{productList}</div>;
}
