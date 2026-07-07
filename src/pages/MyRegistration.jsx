import { useState } from "react"


function MyRegistration(){


const [students,setStudents] = useState(

JSON.parse(localStorage.getItem("students")) || []

)


function cancelRegistration(index){


const updatedData = students.filter(

(student,i)=> i !== index

)


localStorage.setItem(

"students",

JSON.stringify(updatedData)

)


setStudents(updatedData)


alert("Registration Cancelled")


}


return(

<div className="events">


<h1>My Registrations</h1>


{

students.length === 0 ?

<p>No Registration Found</p>

:

students.map((student,index)=>(


<div className="card" key={index}>


<h2>{student.name}</h2>

<p>Email: {student.email}</p>

<p>Branch: {student.branch}</p>

<p>Year: {student.year}</p>


<button 
onClick={()=>cancelRegistration(index)}
>

Cancel Registration

</button>


</div>


))

}


</div>

)

}


export default MyRegistration