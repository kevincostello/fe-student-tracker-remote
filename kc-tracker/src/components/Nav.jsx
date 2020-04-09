import React from "react";
import { Link } from "@reach/router";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/students">
        <button>Students</button>
      </Link>
    </nav>
  );
}
