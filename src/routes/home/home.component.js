import React from "react";
import { Outlet } from "react-router-dom";
import { categories } from "../../constant";
import Directory from "../../components/directory/directory-component";

function Home() {
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
