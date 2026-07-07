import collegeImg from "../assets/college.jpg"


function Home(){

return(

<div 
className="home"
style={{
backgroundImage:`url(${collegeImg})`
}}
>


<div className="home-content">


<h1>
Welcome to <span>EventHub</span>
</h1>


<p>
Discover • Register • Celebrate
</p>


<h3>
Your College Events in One Place
</h3>


</div>


</div>

)

}


export default Home