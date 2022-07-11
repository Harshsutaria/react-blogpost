import axios from "axios";
import { useEffect, useState } from "react";

/**the below component is created in-order to fetch the product data */
export const useFetch = () => {
  console.log("inside useFetch Component!!!");

  // declaring below variables
  let [data, setData] = useState([
    {
      mrp: 1825842,
      pricePerUnit: 1825842,
      id: "5c58",
      productLevel3Title: "custuard apple",
    },
  ]);

  let [error, setError] = useState(null);
  let [pending, setPending] = useState(true);

  // helper functions to fetch the data
  const getData = async (url) => {
    let result;

    console.log(`inside getData helper function with !!!${url}`);
    try {
      result = await axios.get(url);
      setData(result.data);
      setPending(false);
    } catch (error) {
      console.log("ERROR AAGAYA BRUH!!!!!");
      setError(error);
      setPending(false);
    }

    console.log("**********result is *********", result);
  };

  //injecting below useEffect
  useEffect(() => {
    console.log("use effect ran!!!");
    getData("http://localhost:8000/products");
  }, []);

  console.log("returning from useFetch hook with ", data.length);
  return { data };
};
