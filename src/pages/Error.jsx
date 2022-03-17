import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Error() {
  const style = {
    textAlign: "center",
  };
  return (
    <div>
      <Header />
      <div style={style}>
        <h2>An error has occurd!</h2>
        <h4>Oh noes! Try something else :(</h4>
      </div>

      <Footer />
    </div>
  );
}

export default Error;
