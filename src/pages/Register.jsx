import { useState } from "react"


function Register(){


const [form,setForm] = useState({

    name:"",
    email:"",
    branch:"",
    year:""

})


function handleChange(e){

    setForm({

        ...form,

        [e.target.name]:e.target.value

    })

}


function handleSubmit(e){

    e.preventDefault()


    // Form Validation

    if(
        form.name === "" ||
        form.email === "" ||
        form.branch === "" ||
        form.year === ""
    ){

        alert("Please fill all details to complete registration")

        return

    }


    // Get old registrations

    const oldData = JSON.parse(
        localStorage.getItem("students")
    ) || []


    // Add new registration

    const newData = [

        ...oldData,

        form

    ]


    // Save in localStorage

    localStorage.setItem(

        "students",

        JSON.stringify(newData)

    )


    alert("Registration Saved Successfully")


    // Clear form

    setForm({

        name:"",
        email:"",
        branch:"",
        year:""

    })

}



return(

<div className="register">


<h1>Event Registration</h1>


<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Enter Name"

value={form.name}

onChange={handleChange}

/>


<input

type="email"

name="email"

placeholder="Enter Email"

value={form.email}

onChange={handleChange}

/>


<select
name="branch"
value={form.branch}
onChange={handleChange}
>

<option value="">
Select Branch
</option>

<option value="Computer Engineering">
Computer Engineering
</option>

<option value="Information Technology">
Information Technology
</option>

<option value="AI & Data Science">
AI & Data Science
</option>

<option value="Electronics & Telecommunication">
Electronics & Telecommunication
</option>

<option value="Mechanical Engineering">
Mechanical Engineering
</option>

<option value="Civil Engineering">
Civil Engineering
</option>

</select>
<select
name="year"
value={form.year}
onChange={handleChange}
>

<option value="">
Select Year
</option>

<option value="First Year">
First Year
</option>

<option value="Second Year">
Second Year
</option>

<option value="Third Year">
Third Year
</option>

<option value="Final Year">
Final Year
</option>

</select>


<button type="submit">

Register

</button>


</form>


</div>

)

}


export default Register