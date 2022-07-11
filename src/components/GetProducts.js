import { RenderProduct } from "./RenderProduct";
import { useFetch } from "./useFetch";
export const GetProducts = () => {
  console.log("inside GetProducts Component!!!");

  // returning below jsx
  let { data } = useFetch();
  console.log("data is ****************", 0);

  const handleDelete = (id) => {
    console.log("hey bruh  delete is here !!! ", id);
    data.filter((x) => x !== id);
    console.log("data length is ", data.length);
  };

  return (
    <div className="productListing">
      {/* calling the component for rendering basic information */}
      <RenderProduct
        data={data}
        title="Hey Please check product listing!!!"
        handleDelete={handleDelete}
      />
    </div>
  );
};
