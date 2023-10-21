import { useEffect, useState } from "react";
import getproducts from "../api/getproducts";

const useFetch = (url) => {
  const [data, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getproducts(url)
      .then((data) => {
        setProducts(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;
