import React from "react";
import styled from "styled-components";
const Home = () => {
  return (
    <div className="Home">
      <h1>Civil-Gear: Your one-stop construction equipment shop</h1>
      <div className="HomePage">
        <div className="HomeDetails">
          <p>
            It is a digital platform to enhance the accessibility and efficiency
            of equipment procurement for civil engineering professionals.
          </p>
          <ul>
            {" "}
            Why to use Civil-Gear?
            <li>Wide equipment selection </li>
            <li>User-friendly platform</li>
            <li>Convenient Procurement</li>
            <li>Efficient Search</li>
            <li>One-Stop Solution</li>
          </ul>
        </div>

        <img
          className="HomeImage"
          src="/assets/home.jpg"
          alt="Image not found"
          
        />
      </div>
    </div>
  );
};
const ProductImage = styled.img`
  // padding: 0.1em;
  width: 60%;
`;
export default Home;
