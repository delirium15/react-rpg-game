import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <div className="m-3">
        <Outlet />
      </div>
    </div>
  );
}
