import { useState } from "react"
import events from "../data/events"
import EventCard from "../components/EventCard"

function Events(){

    const [search,setSearch] = useState("")
    const [category,setCategory] = useState("All")


    const filteredEvents = events.filter((event)=>{

        const searchMatch =
        event.title.toLowerCase()
        .includes(search.toLowerCase())


        const categoryMatch =
        category==="All" ||
        event.category===category


        return searchMatch && categoryMatch

    })


    return(

        <div className="events">

            <h1>Upcoming Events</h1>


            <input
            type="text"
            placeholder="Search Events..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />


            <div className="filters">

                <button onClick={()=>setCategory("All")}>
                All
                </button>

                <button onClick={()=>setCategory("Technical")}>
                Technical
                </button>

                <button onClick={()=>setCategory("Sports")}>
                Sports
                </button>

                <button onClick={()=>setCategory("Cultural")}>
                Cultural
                </button>

            </div>


            {
                filteredEvents.map((event)=>(
                    <EventCard
                    key={event.id}
                    event={event}
                    />
                ))
            }

        </div>
    )
}


export default Events