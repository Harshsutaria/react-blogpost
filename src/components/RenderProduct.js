export const RenderProduct = ({ data, title }) => {
  console.log("inside RenderProduct Component!!! with ", data, title);

  return (
    <div className="mainProductListing">
      <h1>{title} </h1>
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
