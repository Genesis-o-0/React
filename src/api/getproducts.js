const getProducts = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} - ${res.statusText}`);
    }

    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error in getProducts:");
    throw error;
  }
};

export default getProducts;
