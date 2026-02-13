import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h2>📅 Events</h2>

      {events.length === 0 && <p>No events</p>}

      {events.map(e => (
        <div key={e.id} className="list-item">
          <strong>{e.title}</strong> — {e.location}
          <div className="small-text">
            {new Date(e.eventDate).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;





