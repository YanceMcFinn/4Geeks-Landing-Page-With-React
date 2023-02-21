import React from "react";

export function Jumbotron(props){
    return (
      <>
      <div className="p-4 shadow rounded-3 mb-3" style={{backgroundColor: "#EDEDED"}}>
      <h2>Hello world!</h2>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra
        attention to featured content or information.
      </p>
    
      <hr className="my-4" />
    
      <p>
        It uses utility classes for typography and spacing to space content out within the
        larger container.
      </p>
      <button type="button" className="btn btn-primary">
        Learn more
      </button>
    </div>
    </>
 )}