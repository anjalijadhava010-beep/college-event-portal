import { Link } from "react-router-dom"
import { useState } from "react"


function Navbar(){

const [open,setOpen] = useState(false)


return(

<div className="navbar">


<h2 className="logo">
Event<span>Hub</span>
</h2>


<div 
className="menu"
onClick={()=>setOpen(!open)}
>

☰

</div>


<ul className={open ? "nav-links active" : "nav-links"}>

<li>
<Link to="/">Home</Link>
</li>

<li>
<Link to="/events">Events</Link>
</li>

<li>
<Link to="/about">About</Link>
</li>

<li>
<Link to="/contact">Contact</Link>
</li>

<li>
<Link to="/my-registration">
My Registration
</Link>
</li>


</ul>


</div>

)

}


export default Navbar