import { useEffect, useState } from "react";

function Announcements({ userRole }) {
  const [announcements, setAnnouncements] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function loadAnnouncements() {
    fetch("http://localhost:8082/api/announcements")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  }

  useEffect(() => {
    loadAnnouncements();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8082/api/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setContent("");
        setShowForm(false);
        loadAnnouncements();
      });
  }

  return (
    <div>
      <h2>📢 Announcements</h2>

      {userRole === "admin" && (
        <>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{ marginBottom: "15px" }}
          >
            + New Announcement
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />

              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />

              <button type="submit">Post</button>
            </form>
          )}
        </>
      )}

      {announcements.length === 0 && <p>No announcements</p>}

      {announcements.map((a) => (
        <div key={a.id} className="list-item">
          <strong>{a.title}</strong>
          <div className="small-text">{a.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Announcements;








