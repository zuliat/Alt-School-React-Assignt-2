import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p> This is the home page where the magic happen.</p>
      <button onClick={() => navigate("order-summary")}>Place Order</button>
    </div>
  );
}
export default Home;
