import React from "react";
import { Link } from "react-router-dom";
import "./Lander.css";

export default function Lander() {
  return (
    <div className="lander">
      <p>
        <b>StackNote</b> is your one-size-fits-all resource for managing your
        coding education as you work your way to being a full stack web
        developer.
      </p>
      <p>
        Manage your own personal notes at each stage of your education, from
        client-side programming, to the server-side, to the databases they act
        as the go between for, broken down into as many sub-categories as you'd
        like. Track questions you'd like answered and add the resources that
        help you along the way, all from one central location.
      </p>
      <Link to="/notes">Let's get started</Link>
    </div>
  );
}
