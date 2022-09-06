import React from "react";
import HomeChild from "./HomeChild";

const Home = ({ products }) => {
  console.log(products);

  return (
    <>
      <div className="header">
        <h1>
          <img src="./hello.png" rel="noopener noreferrer" alt="logo" /> <br />
          We are Co-Living
        </h1>
        <p>
          Experience a way of living that’s high on convenience and low on
          compromise, with spaces that are just like home, and more.
        </p>
      </div>
      <div className="container">
        {products.map((elem) => {
          return (
            <div className="content" key={elem.id}>
              <HomeChild elem={elem} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
