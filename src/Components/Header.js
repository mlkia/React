import React from 'react';

function Header(){
   
    const client= "Designer";
    const desi_text="Design"
    const prog_text="Programming"

    return(
        <div className="navbar bg-dark rounded">
            <h1 className="text-white">{client == "Designer" ? desi_text : prog_text} is my life.</h1>
        </div>
    );
}

export default Header
