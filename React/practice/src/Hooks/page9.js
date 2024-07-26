import { useState } from "react";

const Hook4 = () => {
    let[details, updateDetails] = useState({name:"", email:"", mobile:"", skills:"", edu:"" })
    let[fullname, pickName] = useState("");
    let[email, pickEmail] = useState("");
    let[mobile, pickMobile] = useState("")
    let[skills, pickSkills] = useState("");
    let[edu, pickEdu] = useState("");

    const process = () => {
        updateDetails({name: fullname, email: email, mobile: mobile, skills: skills, edu: edu})
    }

    return(
        <div className="container">
            <h1> How to update an object.</h1>
            <table align="left">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td><input type="text" onChange={obj=>pickName(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>e-Mail</th>
                        <td><input type="text" onChange={obj=>pickEmail(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Mobile</th>
                        <td><input type="text" onChange={obj=>pickMobile(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Skills</th>
                        <td><input type="text" onChange={obj=>pickSkills(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Education</th>
                        <td>
                            <select onChange={obj=>pickEdu(obj.target.value)}>
                                <option value="">Choose</option>
                                <option>BTech.</option>
                                <option>MTech.</option>
                                <option>BCA</option>
                                <option>MCA</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        
                        <td colSpan={2} align="center">
                            <button onClick={process}> Process </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table align="right" width={400}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{details.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{details.email}</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>{details.mobile}</td>
                    </tr>
                    <tr>
                        <td>Skills</td>
                        <td>{details.skills}</td>
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td>{details.edu}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Hook4;