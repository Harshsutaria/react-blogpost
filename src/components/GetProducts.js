import { useEffect, useState } from "react";

export const GetProducts = () => {
  console.log("INSIDE GetProducts COMPONENT!!!!!!!!");

  let [data, setData] = useState([]);
  let [error, setError] = useState("");
  let [pending, setPending] = useState("");

  //using use-effect as we want to render this api call every time there is a refresh happening
  useEffect(() => {
    data = fetch("http://localhost:8000/productss")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
        console.log("data is ", JSON.stringify(data));
      })
      .catch((error) => {
        console.log("error aagaya hai bruh!!!", error);
      });
  }, []);

  console.log("data is*******", data);

  return (
    <div className="product">
      <h1>Inside get all products api!!!</h1>
      {data.map((x) => (
        <div className="productList">
          <h1>{x.id}</h1>
          <h1>{x.productLevel3Title}</h1>
          <h1>{x.mrp}</h1>
        </div>
      ))}
    </div>
  );
};
