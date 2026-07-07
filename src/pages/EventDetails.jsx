import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import events from "../data/events"


function EventDetails(){

    const {id} = useParams()


    const event = events.find(
        (event)=> event.id == id
    )


    return(

        <div className="details">

            <h1>{event.title}</h1>

            <p>Date: {event.date}</p>

            <p>Category: {event.category}</p>

            <p>Venue: {event.venue}</p>

            <Link to="/register">

                 <button>
                      Register Now
                </button>

            </Link>
        </div>

    )

}

export default EventDetails