import React, { Component } from "react";
import Landing from "../Components/Landing";
import How from "../Components/Howitworks";
import Why from "../Components/Why";
import Partners from "../Components/Partners";
import Services from "../Components/Services";


const MainContent=() => {

  
    return (
      <div>
        <Landing/>
        <How/>
        <Services/>
        <Why/>
        <Partners/>
        
      </div>
    ); 
};

export default MainContent;