const getProducts = async (url) => {
  const res = await fetch(url);
  const products = await res.json();
  return products;
};

export default getProducts;
