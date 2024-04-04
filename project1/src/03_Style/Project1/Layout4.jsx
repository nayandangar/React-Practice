import React from "react";
import Box1 from "./Box1";
import Header2 from "./Header2";
import Footer from "./Footer";

export default function Layout4() {
  return (
    <div>
      {/* header */}
      <Header2 />
      <br />
      {/* SmallBox-Section */}
      <div>
       <Box1 />
      </div><br />
      {/* last section */}
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}
