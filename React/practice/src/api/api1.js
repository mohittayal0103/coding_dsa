import { useEffect, useState } from "react"

const Myapi1 = () => {
    let[allbook, updateBook] = useState([]);
    let[allcity, updateCity] = useState([]);
    let[alljob, updateJob] = useState([]);

    //Call only when book list is clicked
    const getBook = () => {
        fetch('book.json')
        .then(response=>response.json())
        .then(bookArray=>{
            updateBook(bookArray)
        })
    }

    const getCity = () => {
        fetch('city.json')
        .then(response=>response.json())
        .then(cityArray=>{
            updateCity(cityArray)
        })
    }

    const getJob = () => {
        fetch('job.json')
        .then(response=>response.json())
        .then(jobArray=>{
            updateJob(jobArray);
        })
    }

    useEffect(() => {
        getJob();
    },[true])

    return(
        <div className="container">
            <h1>Fetch(), useState(), useEffect() in React</h1>
            <div>
                <button onClick={getBook}>Book List</button>
                <button onClick={getCity}>City List</button>
            </div>

            <fieldset>
                <legend>All Book : : {allbook.length}  </legend>
                {
                    allbook.map((bookname, index) => {
                        return(
                            <p key={index}>{bookname}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>All City : : {allcity.length}</legend>
                {
                    allcity.map((cityname, index) => {
                        return(
                            <p key={index}>{cityname}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>All Job : : {alljob.length}</legend>
                {
                    alljob.map((jobname, index) => {
                        return(
                            <p key={index}>{jobname}</p>
                        )
                    })
                }
            </fieldset>
        </div>
    )
}

export default Myapi1;