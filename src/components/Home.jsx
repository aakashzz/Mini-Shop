import React, { useState, useEffect } from "react";
import CardList from "./Product/CardList";
import Container from "./container/Container";

import AllProducts from "./Product/AllProducts";

function Home() {
   return (
      <main className="h-full">
         <Container>
            <div>
               <CardList />
            </div>
            <div>
               <AllProducts />
            </div>
         </Container>
      </main>
   );
}

export default Home;
