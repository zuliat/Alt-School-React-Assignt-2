import React from "react";

import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <>
      <div className="search">
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="feature" className="sub-nav">
          feature
        </Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Products;
