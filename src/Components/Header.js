import React from 'react';

function Header(){
    let title= "";
    const client= "ssc";

    if (client === "Designer"){
        title ="Design is my life."
    }else{
        title ="Programming is my life."
    }

    return(
        <div className="navbar bg-dark rounded">
            <h1 className="text-white">{title}</h1>
        </div>
    );
}

export default Header
