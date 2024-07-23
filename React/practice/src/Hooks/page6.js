import {useState} from "react";

const Hook1 = () => {
    let city = ['Bangalore', 'Mumbai', 'Chennai', 'Pune'];
    let [a,b,c,d] = city;

    let [x, y] = useState(1000);
    
    const one = () => {
        y(x+10);
    }

    const two = () => {
        y(x-15);
    }

    let[bookList, updateBook] = useState(['HTML','CSS','JavaScript','BootStrap']);

    return(
        <div className="container">
            <h1>How to use usestate() hook function</h1>
            <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p>
            <p>{d}</p>
            <button onClick={one}>Click to + by 10</button>
            <button onClick={two}>Click to - by 15</button>
            <h1>{x}</h1>
            {bookList.map((book, index) => {
                return(
                    <p key={index}>{book}</p>
                )
            })}
        </div>
    )
}

export default Hook1;