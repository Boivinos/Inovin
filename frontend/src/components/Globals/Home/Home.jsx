import React, { useEffect } from "react";
import Connection from "./Authentification/Connection";
import Inscription from "./Authentification/Inscription";

function Home() {
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNBZG1pbiI6bnVsbCwiaXNWaWduZXJvbiI6bnVsbCwiZmlyc3RuYW1lIjoiQW50b25pbiIsImxhc3RuYW1lIjoiQm9pdmluIiwiaWF0IjoxNjg3MzQzMTYzLCJleHAiOjE2ODczNDY3NjN9.ML2UTG7LmQqJjhbGD394H_6p2xK2EicR2HMQj1MTSWc"
    );
  }, []);

  return (
    <div className="home_logo">
      <Connection />
      <Inscription />
    </div>
  );
}

export default Home;
