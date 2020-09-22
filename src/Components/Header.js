import React from 'react';

function Header(){
   
    const client= "Designer";
    const titel={
        Designer: "Design",
        Programmer: "Programming"
    }

    return(
        <div className="navbar bg-dark rounded">
            <h1 className="text-white">
            {client == "Designer" ? titel.Designer : titel.Programmer} is my life.</h1>
        </div>
    );
}

export default Header
