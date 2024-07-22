const Myuser = () => {
    let userList = ["Alex", "Manoj", "Mihir", "Manan", "Mrinal", "Mohit"]

    return (
        <div className="container">
            <h1>Manage User : {userList.length}</h1>
            {userList.map((fullname, index) => {
                return <p className="four" key={index}> {fullname} </p>
            })}
        </div>
    );
};

export default Myuser