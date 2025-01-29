import { logOutUser } from "@/actions/authActions";
import React from "react";

function page() {
  return (
    <div>
      dashboard
      <button onClick={logOutUser}>SignOut</button>
    </div>
  );
}

export default page;
