import axios from "axios";
import { useEffect, useState } from "react";

export const GetProducts = () => {
  console.log("inside GetProducts Component!!!");

  // declaring below variables
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [pending, SetPending] = useState(true);

  // helper functions

  const getData = async (url) => {
    let result;

    console.log(`inside getData helper function with !!!${url}`);
    try {
      result = await axios.get(url);
      setData(result.data);
    } catch (error) {
      console.log("ERROR AAGAYA BRUH!!!!!");
      setError(error);
    }

    console.log("**********result is *********", result);
  };

  //injecting below useEffect
  useEffect(() => {
    console.log("use effect ran!!!");
    getData("http://localhost:8000/productss");
  }, []);

  // returning below jsx
  return (
    <div className="mainProductListing">
      <h1>Hey Please check product listing!!! </h1>
      {data.map((x) => (
        <div>
          <h1>{x.id}</h1>
          <h1>{x.productLevel3Title}</h1>
          <h1>{x.mrp}</h1>
        </div>
      ))}
    </div>
  );
};
