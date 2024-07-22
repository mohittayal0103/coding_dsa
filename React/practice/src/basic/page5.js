const Details = (xyz) => {
  return (
    <fieldset>
      <legend style={{ background: xyz.bg, color: "white" }}>
        {xyz.pname}
      </legend>
      <p>Brand: {xyz.brand}</p>
      <p>Price: {xyz.price}</p>
      <p>Quantity: {xyz.qty}</p>
      <p>Seller: {xyz.seller}</p>
    </fieldset>
  );
};


export default Details;

