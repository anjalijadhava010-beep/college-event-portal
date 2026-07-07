import { Link } from "react-router-dom"


function EventCard({event}){

return(

<div className="card">
  <img 
   src={event.image}
   className="event-img"
  />

<h2>{event.title}</h2>

<p>Date: {event.date}</p>

<p>Category: {event.category}</p>

<p>Venue: {event.venue}</p>


<Link to={`/events/${event.id}`}>

<button>View Details</button>

</Link>


</div>

)

}

export default EventCard