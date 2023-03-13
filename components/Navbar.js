import Link from "next/link";
import { Auth } from "aws-amplify";
import React from "react";
const Navbar = () => {
  const signOutHandler =async () => {
    try{
        await Auth.signOut();
    }catch(err){
        console.log(err)
    }
  };
  return (
    <nav className="navbar w-100 navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <h3 className="navbar-brand"style={{marginLeft:"400px",marginTop:"10px"}}>
          GRAPHQL
        </h3>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{marginTop:"7px"}}>
              <Link style={{color:"white",textDecoration:"none",margin:"40px"}}href="/">
                Home
              </Link>
            </li>
            <li className="nav-item" style={{marginTop:"7px"}}>
              <Link style={{color:"white",textDecoration:"none",margin:"40px"}}href="/edit-user">
               Edit User
              </Link>
            </li>
            <button
              className="btn btn-danger"
              type="button"
              onClick={signOutHandler}
            >
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;