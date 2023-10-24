import React from "react";

import "./Home.css";
import NavBar from "../../components/nav bar/NavBar";
import Card from "../../components/home cards/Card";

export default function Home() {
  return (
    <div className="homePage">
      <NavBar />
      <div className="cardShow">
        <Card
          image="https://plus.unsplash.com/premium_photo-1675826774817-fe983ceb0475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          name="Chaitanya Pratap Singh "
          email="2229108@kiit.ac.in"
        />
      </div>
    </div>
  );
}
