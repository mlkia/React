import React from 'react';

function Header(){
   
    const client= "Designer";
    const titel={
        Designer: "Design",
        Programmer: "Programming"
    }

    const info={
        firstname: "Malik",
        Lastnmae:"Alhanouti"
    }

    return(
        <div className="navbar bg-dark rounded text-white">
           Hello {`${info.firstname} ${info.Lastnmae}`}    
           <h1>{client === "Designer" ? titel.Designer : titel.Programmer} is my life.</h1>
        </div>
    );
}

export default Header
