import React from 'react';

function EmployeeCardItem(props){
return(

    <div>
        <div className="responsive gallery"> 
            <img src={props.img}/>
            <h3 class="desc">{props.name}</h3>
            <h5 class="desc">{props.job}</h5>
            <p>{props.phone}</p>
            <p>{props.email}</p>
            <p>{props.web}</p>
        </div>
    </div>    

)


}

export default EmployeeCardItem 