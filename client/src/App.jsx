import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainFeed from "./components/MainFeed";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app-root">
      <header>
        <Navbar />
      </header>

      <main className="layout">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar onCreate={() => setShowForm(true)} />
      </main>

      {showForm && (
        <div className="modal-backdrop" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Create New Discussion</h2>
            {/* lightweight form placeholder; later we will connect this to backend */}
            <div style={{ marginTop: 12 }}>
              <p>Discussion form will go here.</p>
              <button onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
