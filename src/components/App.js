
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";


const App = () => {

  let Header=<h1>Welcome to my website</h1>;
  let Footer=<p>2023 My Website.All rights reserved</p>;

  return (

    <div>
        <PageLayout Header={Header} Footer={Footer}>
          <p>©️ This is my content of my website </p>
        </PageLayout>
    </div>
  )
}

export default App
