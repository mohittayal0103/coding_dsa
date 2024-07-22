const MyCustomer = () => {
  let allCustomer = [
    { city: "Bangalore", userlist: ["Ali", "Raj"] },
    { city: "Mangalore", userlist: ["Sumit", "Hitesh", "Madhu"] },
    { city: "Chennai", userlist: ["Sanmukha", "Sneha", "Salim", "Punam"] },
    { city: "Mumbai", userlist: ["Santosh", "Sunil"] },
  ];

  return (
    <div className="container">
      <h1> Manage Customer : {allCustomer.length}</h1>
      {allCustomer.map((customer, index) => {
        return (
          <fieldset key={index}>
            <legend>{customer.city}</legend>
            {customer.userlist.map((user, index) => {
              return <p key={index}>{user}</p>;
            })}
          </fieldset>
        );
      })}
    </div>
  );
};

export default MyCustomer;
