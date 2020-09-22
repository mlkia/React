import React from 'react';

function Header(){
    return(
        <div className="navbar bg-dark rounded">
            <h1 className="text-white">React tutorial.</h1>

            <h2 className="text-white">5+6</h2>
            /*The below code is JS, we write this between the blue braces*/
            <h2 className="text-white">{5+6}</h2>

        </div>
    );
}

export default Header
