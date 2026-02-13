import { useState } from "react";
import "./App.css";
import Announcements from "./Announcements";
import Events from "./Events";
import Login from "./Login";

function App() {
  const [userRole, setUserRole] = useState(null);

  if (!userRole) {
    return <Login onLogin={(role) => setUserRole(role)} />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CampusHub</h1>
        <p>Your campus. One place.</p>
      </header>

      <div className="card">
        <Announcements userRole={userRole} />
      </div>

      <div className="card">
        <Events userRole={userRole} />
      </div>
    </div>
  );
}

export default App;







